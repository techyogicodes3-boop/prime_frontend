const configuredBase=import.meta.env?.VITE_API_BASE_URL?.trim()||'';
const apiBase=configuredBase.replace(/\/+$/,'');

export function apiUrl(path){
  const normalized=String(path||'');
  if(/^https?:\/\//i.test(normalized))return normalized;
  return `${apiBase}${normalized.startsWith('/')?normalized:`/${normalized}`}`;
}

export function followWhatsAppRedirect(result,locationObject=globalThis.location){
  if(!result?.whatsappUrl||!locationObject?.assign)return false;
  let destination;
  try{destination=new URL(result.whatsappUrl)}catch{return false}
  if(destination.protocol!=='https:'||destination.hostname!=='wa.me')return false;
  locationObject.assign(destination.href);
  return true;
}
