import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/server";
import { getAdminSessionOrNull } from "@/lib/auth";

// Admin only: list ALL reviews (approved + pending), most recent first.
export async function GET() {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ reviews: data });
}

// Admin only: approve/unapprove a review. Body: { id, approved }.
export async function PATCH(req: NextRequest) {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const parsed = z
    .object({ id: z.string(), approved: z.boolean() })
    .safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Payload inválido" }, { status: 400 });

  const admin = createAdminClient();
  const { error } = await admin
    .from("reviews")
    .update({ approved: parsed.data.approved })
    .eq("id", parsed.data.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

// Admin only: delete a review. Body: { id }.
export async function DELETE(req: NextRequest) {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await req.json().catch(() => ({ id: null }));
  if (!id) return NextResponse.json({ error: "Falta el id" }, { status: 400 });

  const admin = createAdminClient();
  const { error } = await admin.from("reviews").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
