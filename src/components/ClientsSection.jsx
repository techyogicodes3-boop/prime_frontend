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

const clientHighlights = [
  ['/WhatsApp%20Image%202026-09-30%20at%208.46.05%20AM.jpeg', 'Leadership recognition ceremony'],
  ['/WhatsApp%20Image%202026-09-30%20at%208.45.56%20AM%20(2).jpeg', 'Education excellence awards'],
  ['/WhatsApp%20Image%202026-09-30%20at%208.45.53%20AM%20(2).jpeg', 'Education community celebration'],
  ['/WhatsApp%20Image%202026-09-30%20at%208.45.37%20AM.jpeg', 'Leadership excellence recognition'],
  ['/WhatsApp%20Image%202026-09-30%20at%208.45.36%20AM.jpeg', 'Professional achievement moment'],
  ['/WhatsApp%20Image%202026-09-30%20at%208.45.35%20AM.jpeg', 'School leaders felicitation'],
];

export default function ClientsSection({standalone = false}) {
  const [expanded, setExpanded] = useState(false);
  const clientCard=([file,name],duplicate=false)=><figure className="prism-client-card" key={(duplicate?'duplicate-':'')+file}>
    <div className="prism-client-image"><img src={file} alt={duplicate?'':`${name} – Prism Edu Consultancy Client`} loading="lazy" decoding="async"/></div>
    <figcaption>{name}</figcaption>
  </figure>;
  return <><section id={standalone ? 'our-clients' : 'about-clients'} className={`about-anchor-section prism-clients bg-[#edf5f8] py-16 md:py-24${standalone ? ' prism-clients-page' : ''}`} aria-labelledby="clients-heading">
    <div className="wrap">
      <div className="mx-auto max-w-4xl text-center">
        {standalone&&<p className="section-kicker">OUR CLIENTS</p>}
        {standalone ? <><PrismSectionHeading as="h1" id="clients-heading" className="section-heading">Our Clients</PrismSectionHeading><SectionSubtitle className="mt-4 text-xl font-semibold text-[#10263f] md:text-2xl">Trusted by Educational Institutions</SectionSubtitle><p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">Prism Edu Consultancy builds trusted relationships with schools and educational institutions through collaboration, practical guidance and a shared commitment to educational growth.</p></> : <PrismSectionHeading id="clients-heading" className="section-heading">OUR CLIENTS</PrismSectionHeading>}
      </div>
      {standalone||expanded?<div id="prism-client-grid" className="prism-clients-grid">{clients.map(item=>clientCard(item))}</div>:<div id="prism-client-grid" className="prism-clients-marquee"><div className="prism-clients-track"><div className="prism-clients-group">{clients.map(item=>clientCard(item))}</div><div className="prism-clients-group" aria-hidden="true">{clients.map(item=>clientCard(item,true))}</div></div></div>}
      {!standalone && <div className="mt-8 text-center"><button type="button" className="btn" aria-expanded={expanded} aria-controls="prism-client-grid" onClick={() => setExpanded(value => !value)}>{expanded ? 'Show Client Slider' : 'View All Clients'}</button></div>}
    </div>
  </section>{standalone&&<section className="client-highlights-section py-16 md:py-24" aria-labelledby="client-highlights-heading"><div className="wrap"><div className="mx-auto max-w-3xl text-center"><p className="section-kicker">PRISM EDU MOMENTS</p><PrismSectionHeading id="client-highlights-heading" className="section-heading">Recognition &amp; Collaboration</PrismSectionHeading><SectionSubtitle className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">Celebrating meaningful connections, professional achievements and shared milestones across the education community.</SectionSubtitle></div><div className="client-highlights-grid">{clientHighlights.map(([src,caption],index)=><figure className="client-highlight-card" key={src}><div className="client-highlight-image"><img src={src} alt={caption} loading="lazy" decoding="async"/></div><figcaption><span>{String(index+1).padStart(2,'0')}</span>{caption}</figcaption></figure>)}</div></div></section>}</>;
}
