"use client";

import { useState } from "react";
import { Bug, Lightbulb, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Report } from "@/lib/types";

const STATUS_LABEL: Record<Report["status"], string> = {
  open: "Abierto",
  in_review: "En revisión",
  resolved: "Resuelto",
};

export function ReportsManager({ initial }: { initial: Report[] }) {
  const [reports, setReports] = useState(initial);

  async function setStatus(id: string, status: Report["status"]) {
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    await fetch("/api/admin/reports", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  }

  async function remove(id: string) {
    setReports((prev) => prev.filter((r) => r.id !== id));
    await fetch("/api/admin/reports", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  if (reports.length === 0) {
    return <p className="text-sm text-muted-foreground">No hay reportes ni sugerencias todavía.</p>;
  }

  return (
    <div className="space-y-3">
      {reports.map((r) => (
        <Card key={r.id} className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                {r.type === "bug" ? (
                  <Bug className="h-4 w-4 text-rose-500" />
                ) : (
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                )}
                <p className="font-medium">{r.title}</p>
                <Badge variant={r.status === "resolved" ? "success" : "secondary"}>
                  {STATUS_LABEL[r.status]}
                </Badge>
              </div>
              {(r.name || r.email) && (
                <p className="text-xs text-muted-foreground">
                  {r.name} {r.email ? `· ${r.email}` : ""}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {(["open", "in_review", "resolved"] as const).map((s) => (
                <Button
                  key={s}
                  size="sm"
                  variant={r.status === s ? "default" : "outline"}
                  onClick={() => setStatus(r.id, s)}
                >
                  {STATUS_LABEL[s]}
                </Button>
              ))}
              <Button size="sm" variant="destructive" onClick={() => remove(r.id)}>
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{r.description}</p>
        </Card>
      ))}
    </div>
  );
}
