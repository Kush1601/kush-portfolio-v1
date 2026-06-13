import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
await p.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
await p.waitForTimeout(5000); // let particles settle
await p.screenshot({ path: '/tmp/hero_new.png' });
await b.close(); console.log('ok');
