import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const reportSchema = z.object({
  type: z.enum(["bug", "suggestion"]),
  name: z.string().max(60).optional().nullable(),
  email: z.string().email().max(200).optional().or(z.literal("")).nullable(),
  title: z.string().min(3).max(120),
  description: z.string().min(5).max(2000),
});

export async function POST(req: NextRequest) {
  const parsed = reportSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Revisa los campos del formulario." }, { status: 400 });
  }

  const supabase = await createClient();
  const { error } = await supabase.from("reports").insert({
    type: parsed.data.type,
    name: parsed.data.name || null,
    email: parsed.data.email || null,
    title: parsed.data.title,
    description: parsed.data.description,
  });

  if (error) {
    return NextResponse.json({ error: "No se pudo enviar tu reporte." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
