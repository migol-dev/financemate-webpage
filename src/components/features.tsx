"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Repeat,
  Target,
  HandCoins,
  CalendarRange,
  History,
  UserCog,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const FEATURES = [
  {
    icon: LayoutDashboard,
    title: "Panel de control",
    desc: "Balances, gastos recientes y gráficas interactivas de un vistazo, cada mes.",
  },
  {
    icon: Repeat,
    title: "Conceptos fijos",
    desc: "Automatiza renta, suscripciones y sueldo sin volver a capturarlos cada mes.",
  },
  {
    icon: Target,
    title: "Metas de ahorro",
    desc: "Define objetivos con barras de progreso visuales y emojis personalizados.",
  },
  {
    icon: HandCoins,
    title: "Control de deudas",
    desc: "Registra préstamos y da seguimiento a cada abono, persona por persona.",
  },
  {
    icon: CalendarRange,
    title: "Vista anual",
    desc: "Planeación a largo plazo con desglose mensual de ingresos, gastos y ahorro.",
  },
  {
    icon: History,
    title: "Historial y changelog",
    desc: "Registro transparente de cada cambio realizado dentro de la aplicación.",
  },
  {
    icon: UserCog,
    title: "Perfil personalizado",
    desc: "Nombre, avatar y moneda preferida — MXN, USD, EUR y más.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad total",
    desc: "Datos guardados localmente, con importación/exportación en JSON.",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="container py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Todo lo que necesitas para tus finanzas
        </h2>
        <p className="mt-4 text-muted-foreground">
          Ocho herramientas pensadas para que administrar tu dinero sea simple,
          visual y — sobre todo — privado.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          >
            <Card className="group h-full p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 transition-transform group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
