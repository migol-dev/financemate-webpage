const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL &&
  !process.env.NEXT_PUBLIC_SITE_URL.includes("financepal-web.vercel.app")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.VERCEL_PROJECT_PRODUCTION_URL &&
        !process.env.VERCEL_PROJECT_PRODUCTION_URL.includes("financepal-web.vercel.app")
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://financemate-webpage.vercel.app";

export const SITE_URL = rawSiteUrl.replace(/\/$/, "");
export const APP_URL = "https://financepal-web.vercel.app";
export const BRAND = "Finance Pal";
export const APP_VERSION = "2.0.0";
export const REPO_URL =
  process.env.NEXT_PUBLIC_GITHUB_REPO_URL &&
  !process.env.NEXT_PUBLIC_GITHUB_REPO_URL.includes("financemate-webpage") &&
  !process.env.NEXT_PUBLIC_GITHUB_REPO_URL.includes("finance-mate")
    ? process.env.NEXT_PUBLIC_GITHUB_REPO_URL
    : "https://github.com/migol-dev/finance-pal";

export const APK_DOWNLOAD_URL = `${REPO_URL}/releases/download/v${APP_VERSION}/financemate.apk`;

export const AUTHOR = {
  name: "Miguel (migol-dev)",
  alias: "migol-dev",
  slug: "migol-dev",
  role: "Desarrollador Independiente & Creador de Finance Pal",
  email: "business.migol.gg@gmail.com",
  github: "https://github.com/migol-dev",
  bio: "Desarrollador de software independiente especializado en aplicaciones Local-First, criptografía en el navegador (WebCrypto AES-GCM 256) y herramientas de gestión patrimonial privada de código abierto.",
};

export const DEFAULT_TITLE =
  "Finance Pal | App de Finanzas Personales Gratis, Privada y Sin Conexión";

export const DEFAULT_DESCRIPTION =
  "Finance Pal es la app de finanzas personales gratuita, privada y de código abierto para controlar gastos, presupuestos, metas de ahorro y deudas. 100% Local-First en Android (APK) y Web PWA.";

export const KEYWORDS = [
  "Finance Pal",
  "FinancePal",
  "finance pal app",
  "descargar finance pal apk",
  "app de finanzas personales",
  "app de finanzas personales gratis",
  "control de gastos personales",
  "app para controlar gastos",
  "presupuesto personal",
  "como hacer un presupuesto personal",
  "app para ahorrar dinero",
  "metas de ahorro",
  "control de deudas",
  "gestor financiero personal",
  "app de finanzas sin conexion",
  "app de finanzas offline",
  "app de finanzas privada",
  "finanzas personales codigo abierto",
  "regla 50 30 20",
  "fondo de emergencia",
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const HOME_FAQS: FaqItem[] = [
  {
    category: "Precio y Licencia",
    question: "¿Finance Pal es realmente gratis y sin anuncios?",
    answer:
      "Sí. Finance Pal es 100% gratuito, no incluye anuncios publicitarios, suscripciones ocultas ni muros de pago. Su código fuente está publicado bajo licencia abierta MIT en GitHub para que cualquier persona pueda auditarlo.",
  },
  {
    category: "Privacidad y Seguridad",
    question: "¿Dónde se guardan mis datos financieros y bancarios?",
    answer:
      "Todos tus ingresos, gastos, metas y deudas se almacenan exclusivamente en la memoria interna de tu propio dispositivo (arquitectura 100% Local-First). Finance Pal no envía tus registros financieros a servidores externos ni pide contraseñas bancarias.",
  },
  {
    category: "Funcionamiento Offline",
    question: "¿Funciona sin conexión a internet?",
    answer:
      "Sí. Tanto la aplicación nativa para Android (APK) como la aplicación web progresiva (PWA) operan de forma íntegra sin conexión a internet. Puedes registrar movimientos, consultar gráficas y organizar metas en modo avión.",
  },
  {
    category: "Plataformas y Descarga",
    question: "¿En qué dispositivos puedo usar Finance Pal?",
    answer:
      "Puedes instalar el archivo oficial APK directamente en cualquier teléfono o tablet con Android 8.0 o superior, o abrir la versión Web/PWA desde iOS (iPhone/iPad), Windows, macOS o Linux sin depender de tiendas intermediarias.",
  },
  {
    category: "Respaldo y Cifrado",
    question: "¿Cómo protejo o transfiero mis datos si cambio de teléfono?",
    answer:
      "Finance Pal integra un motor criptográfico WebCrypto AES-GCM de 256 bits con derivación PBKDF2 (100,000 iteraciones). Puedes exportar una copia de seguridad cifrada (.fpal) protegida con tu propia clave y restaurarla en segundos en otro dispositivo o en la versión web.",
  },
  {
    category: "Alcance Regulatorio",
    question: "¿Finance Pal es un banco o se conecta a mis cuentas bancarias?",
    answer:
      "No. Finance Pal es un cuaderno patrimonial personal de registro manual, equivalente a una hoja de cálculo privada de alta precisión. No capta fondos, no realiza transferencias ni solicita credenciales de banca electrónica.",
  },
];
