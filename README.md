# Prism frontend

React/Vite frontend for Prism Edu. Install with `npm ci`, run locally with `npm run dev`, and create a production build with `npm run build`.

The app uses relative `/api` requests. In development, Vite proxies them to `http://127.0.0.1:3001`; in production, Render rewrites them to the backend service. No backend credentials belong in this frontend repository.
