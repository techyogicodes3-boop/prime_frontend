# Prism frontend

React/Vite frontend for Prism Edu. Install with `npm ci`, run locally with `npm run dev`, and create a production build with `npm run build`.

Every frontend GET and POST is built through the shared API URL helper. Set the single frontend environment key `VITE_API_BASE_URL` to the deployed API origin (for example, `https://prime-backend-mj1e.onrender.com`). Leave it unset in local development to use Vite's proxy at `http://127.0.0.1:3001`. No backend credentials belong in this frontend repository.
