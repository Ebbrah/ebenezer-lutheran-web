/**
 * Resize & compress slider sources → WebP for the home page carousel.
 * Expects files in public/images/slider/sources/ (see README.txt).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const sourcesDir = path.join(root, "public/images/slider/sources");
const outDir = path.join(root, "public/images/slider");

/** Match on-screen frame (~21:9) */
const WIDTH = 1920;
const HEIGHT = Math.round(WIDTH / (21 / 9));

const JOBS = [
  { input: "1-church.jpg", output: "slide-1.webp" },
  { input: "2-worship-bw.jpg", output: "slide-2.webp" },
  { input: "3-worship-color.jpg", output: "slide-3.webp" },
];

async function main() {
  if (!fs.existsSync(sourcesDir)) {
    console.error("Missing folder:", sourcesDir);
    process.exit(1);
  }

  let ok = 0;
  for (const job of JOBS) {
    const inputPath = path.join(sourcesDir, job.input);
    const altPng = inputPath.replace(/\.jpg$/i, ".png");
    const src = fs.existsSync(inputPath)
      ? inputPath
      : fs.existsSync(altPng)
        ? altPng
        : null;

    if (!src) {
      console.warn(
        `[skip] Not found: ${job.input} (or .png) — keeping existing ${job.output} if any.`,
      );
      continue;
    }

    const outPath = path.join(outDir, job.output);
    await sharp(src)
      .rotate()
      .resize(WIDTH, HEIGHT, {
        fit: "cover",
        position: "centre",
      })
      .webp({ quality: 82, effort: 6 })
      .toFile(outPath);

    const st = fs.statSync(outPath);
    console.log(
      `[ok] ${path.basename(src)} → ${job.output} (${(st.size / 1024).toFixed(0)} KB, ${WIDTH}×${HEIGHT})`,
    );
    ok += 1;
  }

  if (ok === 0) {
    console.error(
      "\nNo source images were processed. Add files to public/images/slider/sources/ — see README.txt",
    );
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
