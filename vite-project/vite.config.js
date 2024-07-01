import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@emailjs/browser'], // Indica a Vite que este es un módulo externo
    },
  },
});
