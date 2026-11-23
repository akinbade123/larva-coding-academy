import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Static files live in "Public/" (capital P). Files there are served from the site root,
  // e.g. Public/Image/Vector.png -> "/Image/Vector.png".
  publicDir: 'Public',
})
