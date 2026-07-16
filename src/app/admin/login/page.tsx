"use client";

import { Suspense } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Github, Wallet, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function LoginCard() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <Card className="w-full max-w-sm p-8 text-center">
      <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white">
        <Wallet className="h-5 w-5" />
      </div>
      <h1 className="font-display text-xl font-semibold">Panel de administración</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Inicia sesión con la cuenta de GitHub autorizada para gestionar
        Finance Mate.
      </p>

      {error && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-2.5 text-left text-xs text-destructive">
          <ShieldAlert className="h-4 w-4 shrink-0" />
          Esta cuenta no tiene permiso para acceder al panel de admin.
        </div>
      )}

      <Button className="mt-6 w-full" onClick={() => signIn("github", { callbackUrl: "/admin" })}>
        <Github className="mr-1 h-4 w-4" /> Continuar con GitHub
      </Button>
    </Card>
  );
}

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-grid-glow px-4">
      <Suspense fallback={null}>
        <LoginCard />
      </Suspense>
    </main>
  );
}
