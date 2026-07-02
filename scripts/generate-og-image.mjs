// Renders public/og-image.png (1200x630) for Open Graph / Twitter cards.
// Run from the project root: node scripts/generate-og-image.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="blob" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00D9D9"/>
      <stop offset="50%" stop-color="#00B5B5"/>
      <stop offset="100%" stop-color="#0B0B0B" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0B0B0B"/>
  <circle cx="1240" cy="315" r="380" fill="url(#blob)" opacity="0.85"/>

  <!-- Logo: red square with N + wordmark -->
  <rect x="80" y="88" width="56" height="56" rx="12" fill="#CC2936"/>
  <text x="108" y="128" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF">N</text>
  <text x="156" y="126" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#FFFFFF" letter-spacing="-0.5">Northern Landing</text>

  <!-- Eyebrow -->
  <rect x="84" y="248" width="44" height="4" fill="#CC2936"/>
  <text x="144" y="258" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="4" fill="#CC2936">NEW TO CANADA &#183; START HERE</text>

  <!-- Headline -->
  <text x="80" y="350" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="900" fill="#FFFFFF" letter-spacing="-1.5">Welcome to <tspan fill="#CC2936">Canada.</tspan></text>
  <text x="80" y="432" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="900" fill="#FFFFFF" letter-spacing="-1.5">Let&#8217;s build your new home.</text>

  <!-- Subtext -->
  <text x="82" y="510" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#9CA3AF">Free guides on housing, jobs, healthcare &#38; community</text>
  <text x="82" y="548" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#9CA3AF">for newcomers to Canada.</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="${HEIGHT - 10}" width="${WIDTH}" height="10" fill="#CC2936"/>
</svg>
`;

const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og-image.png');

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outPath);
console.log(`Wrote ${outPath}`);
