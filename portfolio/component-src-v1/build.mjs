import { build } from 'vite';
import { fileURLToPath } from 'node:url';
await build({
  root: fileURLToPath(new URL('.', import.meta.url)),
  configFile: false,
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    outDir: '../assets/v1', emptyOutDir: false, minify: true,
    lib: { entry: 'main.tsx', formats: ['es'], name: 'PortfolioV1', fileName: () => 'v1-components.js' }
  }
});
