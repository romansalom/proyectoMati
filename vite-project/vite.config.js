import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['aos'], // Indica a Vite que 'aos' es un módulo externo
    },
  },
});
