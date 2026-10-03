import PrismSectionHeading,{SectionSubtitle} from './SectionHeading';
import {useState} from 'react';
import './clients.css';
import yspm from '../assets/client-logos/yspm.jpeg';
import rajarshi from '../assets/client-logos/rajarshi-shahu.jpeg';
import jayawantrao from '../assets/client-logos/jayawantrao-sawant-college.jpeg';
import jspm from '../assets/client-logos/jspm.jpeg';
import geetanjali from '../assets/client-logos/geetanjali-olympiad-school.jpeg';
import cm from '../assets/client-logos/cm-international-school.jpeg';
import globalAchievers from '../assets/client-logos/global-achievers-school.jpeg';
import silverBirch from '../assets/client-logos/silver-birch-international-school.jpeg';
import delhiPublic from '../assets/client-logos/delhi-public-international-school.jpeg';
import pccoe from '../assets/client-logos/pccoe.jpeg';
import keystone from '../assets/client-logos/keystone-school-of-engineering.jpeg';
import aitrc from '../assets/client-logos/aitrc.jpeg';

const clients = [
  ['/images/clients/first.jpeg', 'Ascent International Schools'],
  [yspm, 'YSPM'],
  [rajarshi, 'Rajarshi Shahu (RSCP)'],
  [jayawantrao, 'JSPM’s Jayawantrao Sawant College of Engineering'],
  [jspm, 'JSPM'],
  [geetanjali, 'Geetanjali Olympiad School'],
  [cm, 'C M International School'],
  [globalAchievers, 'Global Achievers School'],
  [silverBirch, 'Silver Birch International School'],
  [delhiPublic, 'Delhi Public International School'],
  [pccoe, 'Pimpri Chinchwad College of Engineering (PCCOE)'],
  [keystone, 'Keystone School of Engineering'],
  [aitrc, 'AITRC'],
];

const gallery = [
  ['WhatsApp Image 2026-09-30 at 10.48.16 PM.jpeg', 'Students and educators sharing a school activity'],
  ['WhatsApp Image 2026-09-30 at 10.48.17 PM (1).jpeg', 'School leadership and educator collaboration'],
  ['WhatsApp Image 2026-09-30 at 10.48.17 PM.jpeg', 'Prism Edu school engagement'],
  ['WhatsApp Image 2026-09-30 at 8.45.29 AM.jpeg', 'Student learning and community activity'],
  ['WhatsApp Image 2026-09-30 at 8.45.31 AM.jpeg', 'Educational community moment'],
  ['WhatsApp Image 2026-09-30 at 8.45.33 AM.jpeg', 'Prism Edu institutional engagement'],
  ['WhatsApp Image 2026-09-30 at 8.45.37 AM (1).jpeg', 'School collaboration in action'],
  ['WhatsApp Image 2026-09-30 at 8.45.53 AM (1).jpeg', 'Learning and leadership moment'],
  ['WhatsApp Image 2026-09-30 at 8.45.55 AM (1).jpeg', 'Education community gathering'],
  ['WhatsApp Image 2026-09-30 at 8.45.55 AM.jpeg', 'A memorable Prism Edu moment'],
].map(([file,caption])=>['/images/gallery/'+encodeURIComponent(file),caption]);

export default function ClientsSection({standalone = false}) {
  const [expanded, setExpanded] = useState(false);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const clientCard=([file,name],duplicate=false)=><figure className="prism-client-card" key={(duplicate?'duplicate-':'')+file}>
    <div className="prism-client-image"><img src={file} alt={duplicate?'':`${name} – Prism Edu Consultancy Client`} loading="lazy" decoding="async"/></div>
    <figcaption>{name}</figcaption>
  </figure>;
  const galleryCard=([src,caption],duplicate=false)=><figure className="client-gallery-card" key={(duplicate?'duplicate-':'')+src}><img src={src} alt={duplicate?'':caption} loading="lazy" decoding="async"/><figcaption>{caption}</figcaption></figure>;
  return <><section id={standalone ? 'our-clients' : 'about-clients'} className={`about-anchor-section prism-clients bg-[#edf5f8] py-16 md:py-24${standalone ? ' prism-clients-page' : ''}`} aria-labelledby="clients-heading">
    <div className="wrap">
      <div className="mx-auto max-w-4xl text-center">
        {standalone&&<p className="section-kicker">OUR CLIENTS</p>}
        {standalone ? <><PrismSectionHeading as="h1" id="clients-heading" className="section-heading">Our Clients</PrismSectionHeading><SectionSubtitle className="mt-4 text-xl font-semibold text-[#10263f] md:text-2xl">Trusted by Educational Institutions</SectionSubtitle><p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">Prism Edu Consultancy builds trusted relationships with schools and educational institutions through collaboration, practical guidance and a shared commitment to educational growth.</p></> : <PrismSectionHeading id="clients-heading" className="section-heading">OUR CLIENTS</PrismSectionHeading>}
      </div>
      {standalone||expanded?<div id="prism-client-grid" className="prism-clients-grid">{clients.map(item=>clientCard(item))}</div>:<div id="prism-client-grid" className="prism-clients-marquee"><div className="prism-clients-track"><div className="prism-clients-group">{clients.map(item=>clientCard(item))}</div><div className="prism-clients-group" aria-hidden="true">{clients.map(item=>clientCard(item,true))}</div></div></div>}
      {!standalone && <div className="mt-8 text-center"><button type="button" className="btn" aria-expanded={expanded} aria-controls="prism-client-grid" onClick={() => setExpanded(value => !value)}>{expanded ? 'Show Client Slider' : 'View All Clients'}</button></div>}
    </div>
  </section>{standalone&&<section className="client-gallery-section py-16 md:py-24" aria-labelledby="client-gallery-heading"><div className="wrap"><div className="mx-auto max-w-3xl text-center"><p className="section-kicker">GALLERY</p><PrismSectionHeading id="client-gallery-heading" className="section-heading">Our Gallery</PrismSectionHeading><SectionSubtitle className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">A glimpse of our work with students, educators and educational institutions.</SectionSubtitle></div>{galleryExpanded?<div id="client-gallery" className="client-gallery-grid">{gallery.map(item=>galleryCard(item))}</div>:<div id="client-gallery" className="client-gallery-marquee"><div className="client-gallery-track"><div className="client-gallery-group">{gallery.map(item=>galleryCard(item))}</div><div className="client-gallery-group" aria-hidden="true">{gallery.map(item=>galleryCard(item,true))}</div></div></div>}<div className="mt-9 text-center"><button type="button" className="btn" aria-expanded={galleryExpanded} aria-controls="client-gallery" onClick={()=>setGalleryExpanded(value=>!value)}>{galleryExpanded?'Show Gallery Slider':'View All'}</button></div></div></section>}</>;
}
