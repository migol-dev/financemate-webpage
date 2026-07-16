import { requireAdminSession } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/admin-shell";
import { ReviewsManager } from "@/components/admin/reviews-manager";
import type { Review } from "@/lib/types";

export default async function AdminReviewsPage() {
  await requireAdminSession();
  const admin = createAdminClient();
  const { data } = await admin.from("reviews").select("*").order("created_at", { ascending: false });

  return (
    <AdminShell>
      <h1 className="font-display text-2xl font-semibold">Reseñas</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Publica u oculta reseñas de usuarios antes de que aparezcan en el
        sitio.
      </p>
      <div className="mt-6">
        <ReviewsManager initial={(data as Review[]) ?? []} />
      </div>
    </AdminShell>
  );
}
