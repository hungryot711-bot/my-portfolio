// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // ★必ずリポジトリ名と同じ名前を / で囲んで入れてください
})