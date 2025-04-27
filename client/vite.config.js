import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
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
          target: "https://react-jobs-board-ten.vercel.app",
          // target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
