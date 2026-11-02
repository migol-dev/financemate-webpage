import { ImageResponse } from "next/og";

export const alt =
  "Finance Pal — App de Finanzas Personales Gratis, Privada y Sin Conexión";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            paddingBottom: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                backgroundColor: "#11382B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FAF8F5",
                fontSize: "26px",
                fontWeight: 700,
              }}
            >
              FP
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#191918",
                }}
              >
                Finance Pal
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "#45423D",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Edición v2.0.0 · Warm Editorial Wealth
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "#F2EFE9",
              border: "1px solid #E4E0D8",
              fontSize: "16px",
              fontWeight: 600,
              color: "#1F7A5A",
            }}
          >
            100% Local-First · Gratis · Código Abierto MIT
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.035em",
              color: "#191918",
            }}
          >
            Tu app de finanzas personales gratis, privada y sin conexión.
          </div>
          <div
            style={{
              fontSize: "26px",
              lineHeight: 1.45,
              color: "#45423D",
              maxWidth: "880px",
            }}
          >
            Controla gastos, presupuesto mensual, metas de ahorro Drag & Drop y
            deudas con tus datos siempre en tu dispositivo.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #E4E0D8",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#45423D",
          }}
        >
          <div style={{ display: "flex", gap: "28px", fontWeight: 600 }}>
            <span style={{ color: "#1F7A5A" }}>● Android APK Oficial</span>
            <span style={{ color: "#2080E5" }}>● Web App PWA</span>
            <span style={{ color: "#D9730D" }}>● Cifrado AES-GCM 256</span>
          </div>
          <span style={{ fontWeight: 700, color: "#191918" }}>
            Finance Pal por migol-dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
