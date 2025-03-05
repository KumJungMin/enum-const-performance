import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true, // 빌드 후 자동으로 결과를 브라우저에 표시
          filename: 'bundle-analysis.html',
          gzipSize: true,
        }),
      ],
    }
  },
})
