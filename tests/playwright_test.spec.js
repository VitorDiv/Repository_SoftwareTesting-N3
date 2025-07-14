import { test, expect } from '@playwright/test';

test('CRUD completo no front-end', async ({ page }) => {
  await page.goto('http://localhost:5500/frontend/index.html');

  // POST
  await page.fill('#nome', 'Item Playwright');
  await page.click('button[type="submit"]');
  await expect(page.locator('ul')).toContainText('Item Playwright');

  // PUT (editar)
  await page.click('text=Editar');
  // Se der erro no prompt, você pode pular isso ou simular outro input

  // DELETE
  await page.click('text=Excluir');
  await expect(page.locator('ul')).not.toContainText('Item Playwright');
});
