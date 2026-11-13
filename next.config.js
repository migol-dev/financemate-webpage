/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.FIGMA && process.env.FIGMA_PUBLIC_URL
    ? { allowedDevOrigins: [new URL(process.env.FIGMA_PUBLIC_URL).hostname] }
    : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co" },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-dialog",
      "@radix-ui/react-tabs",
      "@radix-ui/react-toast",
      "@radix-ui/react-alert-dialog",
    ],
  },
  async redirects() {
    return [
      {
        source: "/funciones/presupuesto-y-metas",
        destination: "/funciones/presupuesto-personal",
        permanent: true,
      },
      {
        source: "/funciones/prestamos-y-deudas",
        destination: "/funciones/control-de-deudas",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
