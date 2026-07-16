import { requireAdminSession } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/server";
import { AdminShell } from "@/components/admin/admin-shell";
import { GalleryManager } from "@/components/admin/gallery-manager";
import type { GalleryImage } from "@/lib/types";

export default async function AdminGalleryPage() {
  await requireAdminSession();
  const admin = createAdminClient();
  const { data } = await admin
    .from("gallery_images")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <AdminShell>
      <h1 className="font-display text-2xl font-semibold">Galería</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Añade, elimina y reordena las capturas de pantalla que se muestran en
        el sitio.
      </p>
      <div className="mt-6">
        <GalleryManager initial={(data as GalleryImage[]) ?? []} />
      </div>
    </AdminShell>
  );
}
