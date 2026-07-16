import { requireAdminSession } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/admin-shell";
import { ReportsManager } from "@/components/admin/reports-manager";
import type { Report } from "@/lib/types";

export default async function AdminReportsPage() {
  await requireAdminSession();
  const admin = createAdminClient();
  const { data } = await admin.from("reports").select("*").order("created_at", { ascending: false });

  return (
    <AdminShell>
      <h1 className="font-display text-2xl font-semibold">Errores y sugerencias</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Da seguimiento a los reportes de bugs y sugerencias enviadas desde el
        sitio.
      </p>
      <div className="mt-6">
        <ReportsManager initial={(data as Report[]) ?? []} />
      </div>
    </AdminShell>
  );
}
