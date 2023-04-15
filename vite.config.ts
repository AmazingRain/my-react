import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        jsx: 'transform',
        jsxFactory: 'MyReact.createElement',
    }
})
