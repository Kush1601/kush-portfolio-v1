import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
await p.waitForTimeout(4500);
await p.screenshot({ path: '/tmp/r2_top.png' });
for (const [id,name] of [['#about','about'],['#projects','sw'],['#art','art']]) {
  await p.evaluate(s => window.scrollTo(0, document.querySelector(s).offsetTop - 70), id);
  await p.waitForTimeout(1400);
  await p.screenshot({ path: `/tmp/r2_${name}.png` });
}
await b.close(); console.log('ok');
