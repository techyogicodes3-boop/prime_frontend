import {useEffect,useRef,useState} from 'react';
import {useLocation} from 'react-router-dom';
import {X} from 'lucide-react';
import {apiUrl} from '../lib/api.js';

const STORAGE_KEY='prism-principals-school-leadership-award-seen';

export default function LeadershipAwardPopup(){
  const {pathname}=useLocation();
  const[open,setOpen]=useState(false),[event,setEvent]=useState(null);
  const closeButtonRef=useRef(null),dialogRef=useRef(null),previousFocusRef=useRef(null);
  useEffect(()=>{
    if(pathname!=='/'){setOpen(false);return}
    const controller=new AbortController();let timer,poll;
    const show=item=>{
      try{if(sessionStorage.getItem(STORAGE_KEY)===String(item.id))return}catch{}
      const check=()=>{
      if(document.querySelector('.site-loader'))return;
      window.clearInterval(poll);
      timer=window.setTimeout(()=>{try{sessionStorage.setItem(STORAGE_KEY,String(item.id))}catch{}previousFocusRef.current=document.activeElement;setEvent(item);setOpen(true)},200);
      };
      poll=window.setInterval(check,100);check();
    };
    fetch(apiUrl('/api/upcoming-events?limit=1'),{signal:controller.signal}).then(async response=>{if(!response.ok)throw Error();const item=(await response.json()).items?.[0];if(item?.imageId)show(item)}).catch(()=>{});
    return()=>{controller.abort();window.clearInterval(poll);window.clearTimeout(timer)};
  },[pathname]);
  useEffect(()=>{
    if(!open)return;
    const previousOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    closeButtonRef.current?.focus();
    const handleKeyDown=event=>{
      if(event.key==='Escape'){setOpen(false);return}
      if(event.key!=='Tab')return;
      const focusable=dialogRef.current?.querySelectorAll('a[href],button:not([disabled])');
      if(!focusable?.length)return;
      const first=focusable[0],last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    };
    document.addEventListener('keydown',handleKeyDown);
    return()=>{document.removeEventListener('keydown',handleKeyDown);document.body.style.overflow=previousOverflow;previousFocusRef.current?.focus?.()};
  },[open]);
  if(!open||!event)return null;
  return <div className="leadership-award-backdrop" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)setOpen(false)}}>
    <div ref={dialogRef} className="leadership-award-dialog" role="dialog" aria-modal="true" aria-labelledby="leadership-award-popup-title">
      <h2 id="leadership-award-popup-title" className="sr-only">{event.title}</h2>
      <button ref={closeButtonRef} type="button" className="leadership-award-close" onClick={()=>setOpen(false)} aria-label="Close upcoming event"><X aria-hidden="true"/></button>
      <a className="leadership-award-poster-link" href={event.googleFormLink} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)} aria-label={'Open registration for '+event.title}>
        <img src={apiUrl('/api/upcoming-event-media/'+event.imageId)} alt={event.title} fetchPriority="high"/>
      </a>
    </div>
  </div>;
}
