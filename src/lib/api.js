const productionApi='https://prime-backend-mj1e.onrender.com';
const configuredBase=import.meta.env.VITE_API_BASE_URL;
const apiBase=(configuredBase??(import.meta.env.DEV?'':productionApi)).replace(/\/+$/,'');

export function apiUrl(path){
  const normalized=String(path||'');
  if(/^https?:\/\//i.test(normalized))return normalized;
  return `${apiBase}${normalized.startsWith('/')?normalized:`/${normalized}`}`;
}
