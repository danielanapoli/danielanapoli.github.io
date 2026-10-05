import puppeteer from 'puppeteer';
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const p = await b.newPage();
for (const w of [1400]) {
  await p.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
  await p.goto('http://localhost:8765/', { waitUntil: 'networkidle0' });
  const el = await p.$('.timeline');
  await el.screenshot({ path: '/private/tmp/claude-501/-Users-dnapoli-Documents-Repositories-danielanapoli-github-io/7ed0ed73-6279-4ee6-9eff-4ac81ba66314/scratchpad/tl-' + w + '.png' });
}
await b.close();
