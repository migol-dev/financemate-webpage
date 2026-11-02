/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.FIGMA && process.env.FIGMA_PUBLIC_URL
    ? { allowedDevOrigins: [new URL(process.env.FIGMA_PUBLIC_URL).hostname] }
    : {}),
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co" },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

module.exports = nextConfig;
