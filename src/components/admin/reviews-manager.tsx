"use client";

import { useState } from "react";
import { Star, Trash2, BadgeCheck, Eye, EyeOff } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Review } from "@/lib/types";

export function ReviewsManager({ initial }: { initial: Review[] }) {
  const [reviews, setReviews] = useState(initial);

  async function toggleApproved(r: Review) {
    setReviews((prev) => prev.map((x) => (x.id === r.id ? { ...x, approved: !x.approved } : x)));
    await fetch("/api/admin/reviews", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: r.id, approved: !r.approved }),
    });
  }

  async function remove(id: string) {
    setReviews((prev) => prev.filter((x) => x.id !== id));
    await fetch("/api/admin/reviews", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  if (reviews.length === 0) {
    return <p className="text-sm text-muted-foreground">Todavía no hay reseñas.</p>;
  }

  return (
    <div className="space-y-3">
      {reviews.map((r) => (
        <Card key={r.id} className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{r.name}</p>
                {r.has_downloaded && <BadgeCheck className="h-4 w-4 text-brand-500" />}
                <Badge variant={r.approved ? "success" : "secondary"}>
                  {r.approved ? "Publicada" : "Oculta"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{r.email}</p>
              <div className="mt-1 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${i < r.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => toggleApproved(r)}>
                {r.approved ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                {r.approved ? "Ocultar" : "Publicar"}
              </Button>
              <Button size="sm" variant="destructive" onClick={() => remove(r.id)}>
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{r.comment}</p>
        </Card>
      ))}
    </div>
  );
}
