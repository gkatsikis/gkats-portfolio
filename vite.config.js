import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // essay pages are plain HTML entries; the SSR pass builds only the prerender entry
    rollupOptions: isSsrBuild
      ? {}
      : {
          input: [
            'index.html',
            'the-process/index.html',
            'case-study/index.html',
            'pricing-transparency/index.html',
            'do-you-need-custom-software/index.html',
            'outgrown-your-spreadsheet/index.html',
          ],
        },
  },
}))
