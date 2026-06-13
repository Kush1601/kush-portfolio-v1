import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2 });
await p.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
await p.waitForTimeout(3500);
for (const [id,name] of [['#about','about'],['#projects','sw'],['#gallery','gal']]) {
  await p.evaluate(s => window.scrollTo(0, document.querySelector(s).offsetTop - 70), id);
  await p.waitForTimeout(1400);
  await p.screenshot({ path: `/tmp/d_${name}.png` });
}
await b.close(); console.log('ok');
