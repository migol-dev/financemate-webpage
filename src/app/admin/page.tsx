import { requireAdminSession } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/admin-shell";
import { Card } from "@/components/ui/card";
import { Star, Images, MessagesSquare, Download } from "lucide-react";

export default async function AdminDashboard() {
  await requireAdminSession();
  const supabase = createAdminClient();

  const [{ count: reviewsCount }, { count: galleryCount }, { count: openReports }, { count: downloads }] =
    await Promise.all([
      supabase.from("reviews").select("id", { count: "exact", head: true }),
      supabase.from("gallery_images").select("id", { count: "exact", head: true }),
      supabase.from("reports").select("id", { count: "exact", head: true }).eq("status", "open"),
      supabase.from("download_events").select("id", { count: "exact", head: true }),
    ]);

  const stats = [
    { label: "Reseñas totales", value: reviewsCount ?? 0, icon: Star },
    { label: "Imágenes en galería", value: galleryCount ?? 0, icon: Images },
    { label: "Reportes abiertos", value: openReports ?? 0, icon: MessagesSquare },
    { label: "Intentos de descarga", value: downloads ?? 0, icon: Download },
  ];

  return (
    <AdminShell>
      <h1 className="font-display text-2xl font-semibold">Resumen</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Estado general de Finance Mate en este momento.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <div className="flex items-center gap-2 text-muted-foreground">
              <s.icon className="h-4 w-4" />
              <p className="text-xs uppercase tracking-wide">{s.label}</p>
            </div>
            <p className="mt-2 font-display text-3xl font-bold">{s.value}</p>
          </Card>
        ))}
      </div>
    </AdminShell>
  );
}
