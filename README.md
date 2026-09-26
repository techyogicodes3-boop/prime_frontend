# Prism frontend

React/Vite frontend for Prism Edu. Install with `npm ci`, run locally with `npm run dev`, and create a production build with `npm run build`.

In development, API requests use Vite's proxy to `http://127.0.0.1:3001`. Production calls `https://prime-backend-mj1e.onrender.com` directly; set `VITE_API_BASE_URL` at build time to override it. No backend credentials belong in this frontend repository.
