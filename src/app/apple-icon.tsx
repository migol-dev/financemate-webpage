import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#11382B",
          borderRadius: 40,
          border: "4px solid rgba(52, 211, 153, 0.35)",
          color: "#FAF8F5",
          fontFamily: "Georgia, serif",
          fontSize: 78,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        <span>F</span>
        <span style={{ color: "#34D399", fontStyle: "italic" }}>P</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
