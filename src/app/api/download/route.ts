import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const bodySchema = z.object({
  visitorId: z.string().min(8).max(100),
  version: z.string().min(1).max(30),
});

export async function POST(req: NextRequest) {
  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const supabase = await createClient();
  const { error } = await supabase.from("download_events").insert({
    visitor_id: parsed.data.visitorId,
    version: parsed.data.version,
  });

  if (error) {
    return NextResponse.json({ error: "No se pudo registrar" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function GET(req: NextRequest) {
  const visitorId = req.nextUrl.searchParams.get("visitorId");
  if (!visitorId) return NextResponse.json({ hasDownloaded: false });

  const supabase = await createClient();
  const { count } = await supabase
    .from("download_events")
    .select("id", { count: "exact", head: true })
    .eq("visitor_id", visitorId);

  return NextResponse.json({ hasDownloaded: (count ?? 0) > 0 });
}
