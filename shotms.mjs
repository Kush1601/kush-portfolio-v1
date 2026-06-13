import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
try {
  await p.goto('http://mindsafe.duckdns.org:5000', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await p.waitForTimeout(3500);
  await p.screenshot({ path: 'public/assets/mindsafe.png' });
  console.log('CAPTURED');
} catch(e){ console.log('FAIL', e.message); }
await b.close();
