// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',  // Pasta onde estão os testes e2e
  retries: 0,        // Quantas vezes tenta rodar se falhar
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  use: {
    headless: true,  // Roda sem abrir navegador
    screenshot: 'only-on-failure',  // Tira print só se falhar
    video: 'retain-on-failure',     // Gera vídeo só se falhar
    baseURL: 'http://localhost:3000', // URL base do seu projeto
  },
});
