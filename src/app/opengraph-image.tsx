import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export const alt = "KataHero — anteprima link";

/** Formato consigliato da Meta (Instagram/Facebook) per le anteprime link: 1200×630, ~1.91:1. */
export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

function detectMime(buf: Buffer): string {
  if (buf[0] === 0xff && buf[1] === 0xd8) return "image/jpeg";
  if (buf[0] === 0x89 && buf[1] === 0x50) return "image/png";
  return "image/png";
}

export default async function Image() {
  const logoPath = join(process.cwd(), "public/oj-image.png");
  const logoBuffer = await readFile(logoPath);
  const mime = detectMime(logoBuffer);
  const base64 = logoBuffer.toString("base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- richiesto da @vercel/og / Satori */}
        <img alt="" height={630} src={`data:${mime};base64,${base64}`} width={630} />
      </div>
    ),
    { ...size },
  );
}
