import {useEffect,useState} from 'react';
import {ArrowRight,CalendarDays} from 'lucide-react';
import {Link} from 'react-router-dom';
import PrismSectionHeading,{SectionSubtitle} from './SectionHeading';
import {apiUrl} from '../lib/api.js';

const eventImage=item=>apiUrl('/api/upcoming-event-media/'+item.imageId);

export default function UpcomingEvents({home=false}){
  const[items,setItems]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState('');
  useEffect(()=>{const controller=new AbortController();fetch(apiUrl('/api/upcoming-events'+(home?'?limit=1':'')),{signal:controller.signal}).then(async response=>{const data=await response.json().catch(()=>({}));if(!response.ok)throw Error(data.error||'Unable to load upcoming events.');setItems(data.items||[]);setError('')}).catch(requestError=>{if(requestError.name!=='AbortError')setError(requestError.message)}).finally(()=>setLoading(false));return()=>controller.abort()},[home]);
  return <section className={'upcoming-events-section '+(home?'home-upcoming-events':'')} aria-labelledby={home?'home-upcoming-events-title':'upcoming-events-title'}><div className="wrap"><div className="upcoming-events-heading"><div><p className="section-kicker">UPCOMING EVENT</p><PrismSectionHeading as="h2" id={home?'home-upcoming-events-title':'upcoming-events-title'} className="section-heading">Upcoming Event</PrismSectionHeading><SectionSubtitle className="mt-4 leading-7 text-slate-600">Event date and venue details will be announced in the coming days.</SectionSubtitle></div>{home&&<Link className="upcoming-events-all" to="/events-awards">View all events <ArrowRight size={16}/></Link>}</div>{loading?<p className="upcoming-events-status" role="status">Loading upcoming events…</p>:error?<p className="upcoming-events-status upcoming-events-error" role="alert">{error}</p>:items.length?<div className={'upcoming-events-grid '+(home?'is-home':'')}>{items.map(item=><article className="upcoming-event-card" key={item.id}><img src={eventImage(item)} alt={item.title} loading={home?'eager':'lazy'}/><div><span><CalendarDays size={15}/> Upcoming Event</span><h3>{item.title}</h3><a className="btn" href={item.googleFormLink} target="_blank" rel="noopener noreferrer">Register Now <ArrowRight size={16}/></a></div></article>)}</div>:<p className="upcoming-events-status">New event details will be announced soon.</p>}</div></section>;
}
