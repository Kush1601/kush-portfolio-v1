import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
await p.goto('http://localhost:5173', { waitUntil: 'networkidle', timeout: 30000 });
await p.waitForTimeout(3000);
await p.evaluate(() => window.scrollTo(0, document.querySelector('#projects').offsetTop - 70));
await p.waitForTimeout(1500);
await p.screenshot({ path: '/tmp/sw_new.png' });
await b.close(); console.log('ok');
