import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { getAdminSessionOrNull } from "@/lib/auth";

const GALLERY_BUCKET = "gallery";

// Public: list gallery images ordered for display.
export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gallery_images")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ images: data });
}

// Admin only: upload a new gallery image (multipart/form-data: file, title, description).
export async function POST(req: NextRequest) {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const title = String(formData.get("title") ?? "");
  const description = String(formData.get("description") ?? "");

  const meta = z.object({ title: z.string().min(1).max(100) }).safeParse({ title });
  if (!file || !meta.success) {
    return NextResponse.json({ error: "Faltan datos: archivo y título son obligatorios." }, { status: 400 });
  }

  const admin = createAdminClient();
  const ext = file.name.split(".").pop() ?? "png";
  const path = `${crypto.randomUUID()}.${ext}`;

  const arrayBuffer = await file.arrayBuffer();
  const { error: uploadError } = await admin.storage
    .from(GALLERY_BUCKET)
    .upload(path, Buffer.from(arrayBuffer), { contentType: file.type, upsert: false });

  if (uploadError) {
    return NextResponse.json({ error: `No se pudo subir la imagen: ${uploadError.message}` }, { status: 500 });
  }

  const { data: publicUrl } = admin.storage.from(GALLERY_BUCKET).getPublicUrl(path);

  const { count } = await admin.from("gallery_images").select("id", { count: "exact", head: true });

  const { data, error } = await admin
    .from("gallery_images")
    .insert({
      title,
      description: description || null,
      image_url: publicUrl.publicUrl,
      sort_order: count ?? 0,
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ image: data }, { status: 201 });
}

// Admin only: reorder images. Body: { order: string[] } (image ids in new order).
export async function PATCH(req: NextRequest) {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const parsed = z.object({ order: z.array(z.string()) }).safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Payload inválido" }, { status: 400 });

  const admin = createAdminClient();
  await Promise.all(
    parsed.data.order.map((id, index) =>
      admin.from("gallery_images").update({ sort_order: index }).eq("id", id)
    )
  );

  return NextResponse.json({ ok: true });
}

// Admin only: delete an image. Body: { id: string }.
export async function DELETE(req: NextRequest) {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await req.json().catch(() => ({ id: null }));
  if (!id) return NextResponse.json({ error: "Falta el id" }, { status: 400 });

  const admin = createAdminClient();
  const { error } = await admin.from("gallery_images").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
