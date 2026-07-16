"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { SortableContext, useSortable, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import type { GalleryImage } from "@/lib/types";

function SortableRow({ img, onDelete }: { img: GalleryImage; onDelete: (id: string) => void }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: img.id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`flex items-center gap-4 rounded-2xl border border-border bg-card p-3 ${
        isDragging ? "opacity-60" : ""
      }`}
    >
      <button {...attributes} {...listeners} className="cursor-grab text-muted-foreground">
        <GripVertical className="h-5 w-5" />
      </button>
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-secondary">
        <Image src={img.image_url} alt={img.title} fill className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium">{img.title}</p>
        <p className="truncate text-xs text-muted-foreground">{img.description}</p>
      </div>
      <button
        onClick={() => onDelete(img.id)}
        className="rounded-lg p-2 text-destructive hover:bg-destructive/10"
        aria-label="Eliminar"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}

export function GalleryManager({ initial }: { initial: GalleryImage[] }) {
  const [images, setImages] = useState(initial);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  async function refresh() {
    const res = await fetch("/api/gallery", { cache: "no-store" });
    if (res.ok) setImages((await res.json()).images);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file || !title) return;
    setUploading(true);
    setErrorMsg("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("title", title);
      fd.append("description", description);
      const res = await fetch("/api/gallery", { method: "POST", body: fd });
      if (!res.ok) throw new Error((await res.json()).error ?? "Error al subir");
      setTitle("");
      setDescription("");
      setFile(null);
      await refresh();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Error al subir");
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id: string) {
    setImages((prev) => prev.filter((i) => i.id !== id));
    await fetch("/api/gallery", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = images.findIndex((i) => i.id === active.id);
    const newIndex = images.findIndex((i) => i.id === over.id);
    const reordered = arrayMove(images, oldIndex, newIndex);
    setImages(reordered);
    await fetch("/api/gallery", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order: reordered.map((i) => i.id) }),
    });
  }

  useEffect(() => {
    setImages(initial);
  }, [initial]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
      <Card className="h-fit p-6">
        <h2 className="font-display font-semibold">Añadir imagen</h2>
        <form onSubmit={handleUpload} className="mt-4 space-y-3">
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            required
          />
          <Input
            placeholder="Título (ej. Panel de control)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Descripción de la función que muestra"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errorMsg && <p className="text-sm text-destructive">{errorMsg}</p>}
          <Button type="submit" disabled={uploading} className="w-full">
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            Subir a la galería
          </Button>
        </form>
      </Card>

      <div>
        <p className="mb-3 text-sm text-muted-foreground">
          Arrastra para reordenar cómo aparecen en el sitio.
        </p>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={images.map((i) => i.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-3">
              {images.map((img) => (
                <SortableRow key={img.id} img={img} onDelete={handleDelete} />
              ))}
              {images.length === 0 && (
                <p className="text-sm text-muted-foreground">Aún no hay imágenes en la galería.</p>
              )}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
