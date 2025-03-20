import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the base path with your repository name
export default defineConfig({
  plugins: [react()],
  base: '/MuhammedRafeek/', // Ensure this matches your GitHub repository
});
