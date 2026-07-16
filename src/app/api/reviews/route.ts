import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const reviewSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email().max(200),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(5).max(800),
  hasDownloaded: z.boolean().optional().default(false),
});

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("reviews")
    .select("id,name,rating,comment,has_downloaded,created_at,approved")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ reviews: data });
}

export async function POST(req: NextRequest) {
  const parsed = reviewSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Revisa los campos del formulario." }, { status: 400 });
  }

  const supabase = await createClient();
  const { error } = await supabase.from("reviews").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    rating: parsed.data.rating,
    comment: parsed.data.comment,
    has_downloaded: parsed.data.hasDownloaded,
  });

  if (error) {
    return NextResponse.json({ error: "No se pudo guardar tu reseña." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
