import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // host: true permite abrir el sitio desde el celular en la misma red WiFi
  server: { host: true },
  preview: { host: true },
});
