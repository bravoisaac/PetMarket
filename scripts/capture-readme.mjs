import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputDir = 'docs/images';

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: edgePath,
  headless: true
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 1100 },
  deviceScaleFactor: 1
});

await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });
await page.screenshot({ path: `${outputDir}/petmarket-home.png`, fullPage: true });

await page.locator('.product-card ion-button').first().click();
await page.locator('.product-card ion-button').nth(1).click();
await page.locator('#carrito').scrollIntoViewIfNeeded();
await page.screenshot({ path: `${outputDir}/petmarket-cart.png`, fullPage: false });

await page.getByRole('button', { name: 'Continuar compra' }).click();
await page.getByPlaceholder('Ej: Camila Soto').fill('Camila Soto');
await page.getByPlaceholder('correo@demo.cl').fill('camila@demo.cl');
await page.getByPlaceholder('+56 9 1234 5678').fill('+56 9 1234 5678');
await page.getByPlaceholder('Av. Principal 123').fill('Av. Principal 123');
await page.getByRole('button', { name: 'Crear pago Webpay' }).click();
await page.locator('#carrito').scrollIntoViewIfNeeded();
await page.screenshot({ path: `${outputDir}/petmarket-webpay.png`, fullPage: false });

await page.getByRole('button', { name: 'Aprobar pago demo' }).click();
await page.locator('#carrito').scrollIntoViewIfNeeded();
await page.screenshot({ path: `${outputDir}/petmarket-receipt.png`, fullPage: false });

await browser.close();
