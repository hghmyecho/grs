import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #002766 0%, #001433 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #fadb14, #fa8c16, #fa541c)",
            }}
          />
          <span style={{ color: "#fa8c16", fontSize: 24, fontWeight: 700, letterSpacing: 2 }}>
            GLOBAL REHABILITATION SERVICE
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Holistic care, built around your whole story.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Allied health across NSW &amp; QLD
        </div>
      </div>
    ),
    { ...size }
  );
}
