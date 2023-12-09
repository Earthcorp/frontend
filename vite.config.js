/* eslint-disable */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://server.earthcorp.in",
    },
  },
  plugins: [react()],
});

// https://dashboard-api-q7w3.onrender.com
// http://localhost:5001
