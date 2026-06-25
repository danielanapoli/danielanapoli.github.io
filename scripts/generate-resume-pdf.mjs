import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '..', 'out');
const PORT = 3099;
const PDF_PATHS = [
  path.join(OUT_DIR, 'Daniela-Napoli-Resume.pdf'),
  path.join(__dirname, '..', 'public', 'Daniela-Napoli-Resume.pdf'),
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.txt':  'text/plain',
  '.xml':  'application/xml',
};

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      let urlPath = req.url.split('?')[0];
      let filePath = path.join(OUT_DIR, urlPath);

      // For extensionless paths, try flat .html first (Next.js static export),
      // then directory index.html as fallback.
      const candidates = path.extname(filePath)
        ? [filePath]
        : [`${filePath}.html`, path.join(filePath, 'index.html')];

      const tryNext = (i) => {
        if (i >= candidates.length) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        fs.readFile(candidates[i], (err, data) => {
          if (err) { tryNext(i + 1); return; }
          const ext = path.extname(candidates[i]);
          res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
          res.end(data);
        });
      };

      tryNext(0);
    });

    server.listen(PORT, (err) => {
      if (err) reject(err);
      else resolve(server);
    });
  });
}

async function generatePDF() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error('Error: out/ directory not found. Run `npm run build` first.');
    process.exit(1);
  }

  console.log('Starting local server...');
  const server = await startServer();

  const systemChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const executablePath = fs.existsSync(systemChrome) ? systemChrome : undefined;

  const browser = await puppeteer.launch({ headless: true, executablePath });

  try {
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(`http://localhost:${PORT}/resume`, { waitUntil: 'networkidle0', timeout: 30000 });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: false,
      margin: { top: '1.5cm', bottom: '1.5cm', left: '1.5cm', right: '1.5cm' },
    });

    for (const dest of PDF_PATHS) {
      fs.writeFileSync(dest, pdfBuffer);
      console.log(`✓ PDF written: ${dest}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

generatePDF().catch((err) => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});
