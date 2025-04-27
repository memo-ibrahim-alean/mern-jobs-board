import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        plugins: [
          tailwindcss({
            content: ["./src/**/*.{js,jsx,ts,tsx}"],
            theme: {
              extend: {
                fontFamily: {
                  sans: ["Roboto", "sans-serif"],
                },
              },
              gridTemplateColumns: {
                "70/30": "70% 28%",
              },
            },
            plugins: [],
          }),
        ],
      },
    }),
  ],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
