import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['aos', '@emailjs/browser'], // Indica a Vite que estos son módulos externos
    },
  },
});
