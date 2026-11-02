import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/blog";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function BlogOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  const title = post?.title ?? "Guía de Finanzas Personales | Finance Pal";
  const category = post?.category ?? "Educación Financiera";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAF8F5",
          color: "#191918",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          border: "16px solid #F2EFE9",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "2px solid #E4E0D8",
            paddingBottom: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#11382B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FAF8F5",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              FP
            </div>
            <span
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#191918",
              }}
            >
              Finance Pal · Biblioteca Patrimonial
            </span>
          </div>
          <span
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "#F2EFE9",
              border: "1px solid #E4E0D8",
              fontSize: "16px",
              fontWeight: 700,
              color: "#1F7A5A",
            }}
          >
            {category}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "1020px",
          }}
        >
          <div
            style={{
              fontSize: "54px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#191918",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #E4E0D8",
            paddingTop: "22px",
            fontSize: "18px",
            color: "#45423D",
          }}
        >
          <span style={{ fontWeight: 600, color: "#1F7A5A" }}>
            Guía Gratuita · 100% Local-First · Sin Publicidad
          </span>
          <span style={{ fontWeight: 700, color: "#191918" }}>
            Por Miguel (migol-dev)
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
