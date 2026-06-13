import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
await p.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
await p.waitForTimeout(4000);
for (const [id,name] of [['#experience','exp'],['#projects','sw'],['#art','art']]) {
  await p.evaluate(s => window.scrollTo(0, document.querySelector(s).offsetTop - 70), id);
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `/tmp/g_${name}.png` });
}
await b.close(); console.log('ok');
