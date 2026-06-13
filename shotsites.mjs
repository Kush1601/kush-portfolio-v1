import { chromium } from 'playwright';
const sites = [
  ['https://surge-aid.vercel.app','public/assets/surgeaid.png'],
  ['https://yelpcamp-topaz.vercel.app','public/assets/yelpcamp.png'],
  ['https://dail-backend-zeta.vercel.app','public/assets/dail.png'],
];
const b = await chromium.launch();
for (const [url,out] of sites){
  const p = await b.newPage({ viewport:{width:1280,height:800} });
  try{ await p.goto(url,{waitUntil:'domcontentloaded',timeout:25000}); await p.waitForTimeout(3500); await p.screenshot({path:out}); console.log('OK',out); }
  catch(e){ console.log('FAIL',url,e.message.slice(0,60)); }
  await p.close();
}
await b.close();
