import {useEffect,useState} from 'react';
import {ArrowRight,CalendarDays} from 'lucide-react';
import PrismSectionHeading,{SectionSubtitle} from './SectionHeading';
import {apiUrl} from '../lib/api.js';

const eventImage=item=>apiUrl('/api/upcoming-event-media/'+item.imageId);

export default function UpcomingEvents(){
  const[items,setItems]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState('');
  useEffect(()=>{const controller=new AbortController();fetch(apiUrl('/api/upcoming-events'),{signal:controller.signal,cache:'no-store'}).then(async response=>{const data=await response.json().catch(()=>({}));if(!response.ok)throw Error(data.error||'Unable to load upcoming events.');setItems(data.items||[]);setError('')}).catch(requestError=>{if(requestError.name!=='AbortError')setError(requestError.message)}).finally(()=>setLoading(false));return()=>controller.abort()},[]);
  return <section className="upcoming-events-section" aria-labelledby="upcoming-events-title"><div className="wrap"><div className="upcoming-events-heading"><div><p className="section-kicker">UPCOMING EVENT</p><PrismSectionHeading as="h2" id="upcoming-events-title" className="section-heading">Upcoming Event</PrismSectionHeading><SectionSubtitle className="mt-4 leading-7 text-slate-600">Event date and venue details will be announced in the coming days.</SectionSubtitle></div></div>{loading?<p className="upcoming-events-status" role="status">Loading upcoming events…</p>:error?<p className="upcoming-events-status upcoming-events-error" role="alert">{error}</p>:items.length?<div className="upcoming-events-grid">{items.map(item=><article className="upcoming-event-card" key={item.id}><img src={eventImage(item)} alt={item.title} loading="lazy"/><div><span><CalendarDays size={15}/> Upcoming Event</span><h3>{item.title}</h3><a className="btn" href={item.googleFormLink} target="_blank" rel="noopener noreferrer">Register Now <ArrowRight size={16}/></a></div></article>)}</div>:<p className="upcoming-events-status">New event details will be announced soon.</p>}</div></section>;
}
