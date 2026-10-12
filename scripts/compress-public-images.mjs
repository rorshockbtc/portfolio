// One-off: recompress oversized images in client/public in place (same filenames).
// Originals remain recoverable from git history.
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2];
const MIN = 600 * 1024;
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(png|jpe?g)$/i.test(f) && st.size > MIN) files.push(p);
  }
})(root);

let before = 0, after = 0;
for (const f of files) {
  const src = fs.readFileSync(f);
  const meta = await sharp(src).metadata();
  const poster = /colors-type-grids/.test(f);
  const maxW = poster ? 3200 : 2200;
  let img = sharp(src).rotate();
  if ((meta.width || 0) > maxW) img = img.resize({ width: maxW, withoutEnlargement: true });
  const out = /\.png$/i.test(f)
    ? await img.png({ compressionLevel: 9, palette: true, quality: 90, effort: 9 }).toBuffer()
    : await img.jpeg({ quality: poster ? 82 : 78, mozjpeg: true, progressive: true }).toBuffer();
  before += src.length;
  if (out.length < src.length * 0.9) {
    fs.writeFileSync(f, out);
    after += out.length;
    console.log(`${(src.length / 1024).toFixed(0)}K -> ${(out.length / 1024).toFixed(0)}K  ${path.relative(root, f)}`);
  } else {
    after += src.length;
  }
}
console.log(`TOTAL ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB across ${files.length} files`);
