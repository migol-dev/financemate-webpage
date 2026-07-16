import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/server";
import { getAdminSessionOrNull } from "@/lib/auth";

export async function GET() {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("reports")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ reports: data });
}

// Admin only: update a report's status. Body: { id, status }.
export async function PATCH(req: NextRequest) {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const parsed = z
    .object({ id: z.string(), status: z.enum(["open", "in_review", "resolved"]) })
    .safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Payload inválido" }, { status: 400 });

  const admin = createAdminClient();
  const { error } = await admin
    .from("reports")
    .update({ status: parsed.data.status })
    .eq("id", parsed.data.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const session = await getAdminSessionOrNull();
  if (!session) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await req.json().catch(() => ({ id: null }));
  if (!id) return NextResponse.json({ error: "Falta el id" }, { status: 400 });

  const admin = createAdminClient();
  const { error } = await admin.from("reports").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
