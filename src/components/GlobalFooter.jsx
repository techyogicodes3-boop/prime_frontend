import {ArrowRight,Mail,MapPin,Phone,PhoneCall} from 'lucide-react';
import {Link} from 'react-router-dom';

const contact={
  address:['Pimpri Nilakh,Pune, Maharashtra-411027'],
  phones:['9518963309'],
  email:'info@prismedu.in',
  whatsapp:'https://wa.me/919518963309',
};

function SocialIcon({name}){const paths={
  WhatsApp:'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.297.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.004 2a9.84 9.84 0 0 0-8.396 14.966L2 22l5.19-1.567A9.9 9.9 0 0 0 12 21.645h.004A9.823 9.823 0 0 0 21.846 11.8 9.85 9.85 0 0 0 12.004 2m0 17.984h-.003a8.18 8.18 0 0 1-4.169-1.14l-.3-.178-3.08.93.92-3.002-.195-.308A8.18 8.18 0 1 1 12.004 19.984',
  LinkedIn:'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286M5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124M3.56 9h3.555v11.452H3.56z',
  Facebook:'M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1.013.282-1.703 1.75-1.703H17V2.42c-.302-.04-1.337-.13-2.57-.13-2.544 0-4.286 1.553-4.286 4.405V9.5H7.25V13h2.894v9H13.5',
  Instagram:'M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6'
};return <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true"><path d={paths[name]}/></svg>}

const socialLinks=[
  {label:'WhatsApp',url:contact.whatsapp},
  {label:'LinkedIn',url:'https://www.linkedin.com/in/prajkta-shinde-3a1690143?utm_source=share_via&utm_content=profile&utm_medium=member_ios'},
  {label:'Facebook',url:'https://www.facebook.com/p/Prism-Edu-Consultancy-61594655243393/'},
  {label:'Instagram',url:'https://www.instagram.com/prismedu2026/'},
];

const quickLinks=[['Home','/'],['About Us','/about'],['School Properties','/school-properties'],['Our Services','/services'],['Shop School Material','/school-materials'],['Resources','/resources'],['Contact Us','/contact'],['Request Consultation','/contact#contact-form']];
const serviceLinks=[['School Services','/services#school-services'],['School Properties & Support Services','/services#school-properties-support'],['Industry Associates','/services#industry-associates-services'],['Licensing & Legal Support Services','/services#licensing-legal'],['Web & Digital Solutions Services','/services#digital-services']];
function FooterLink({to,children}){return to.endsWith('.xml')?<a className="footer-link" href={to}>{children}<ArrowRight size={13} aria-hidden="true"/></a>:<Link className="footer-link" to={to}>{children}<ArrowRight size={13} aria-hidden="true"/></Link>}

export default function GlobalFooter(){return <footer className="global-footer">
  <div className="footer-cta wrap">
    <div><p className="footer-eyebrow">LET’S WORK TOGETHER</p><h2>Let’s Build a Stronger Educational Institution Together</h2><p>Connect with Prism Edu Consultancy for practical guidance, professional services, and long-term institutional support.</p></div>
    <div className="footer-cta-actions">
      <Link className="footer-action footer-action-primary" to="/contact#contact-form">Request Consultation <ArrowRight size={17}/></Link>
      <a className="footer-action" href={'tel:+91'+contact.phones[0]}><PhoneCall size={17}/>Call Now</a>
      <a className="footer-action" href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><Phone size={17}/>WhatsApp Us</a>
      <a className="footer-action" href={'mailto:'+contact.email}><Mail size={17}/>Email Us</a>
    </div>
  </div>
  <div className="footer-main wrap">
    <section className="footer-brand" aria-labelledby="footer-brand-title"><img src="/images/prism-official/prism-logo.jpg" alt="Prism Edu Consultancy" width="190" height="150" loading="lazy"/><h2 id="footer-brand-title" className="sr-only">Prism Edu Consultancy</h2><p>Prism Edu Consultancy supports school founders, management teams, educators, and education entrepreneurs through practical guidance, professional services, and sustainable institutional-development solutions.</p><strong>Supporting Educational Institutions from Vision to Growth.</strong><div className="footer-socials">{socialLinks.map(({label,url})=><a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><SocialIcon name={label}/></a>)}</div></section>
    <nav aria-labelledby="footer-quick-title"><h2 id="footer-quick-title">Quick Links</h2>{quickLinks.map(([label,to])=><FooterLink key={label} to={to}>{label}</FooterLink>)}</nav>
    <nav aria-labelledby="footer-services-title"><h2 id="footer-services-title">Our Core Services</h2>{serviceLinks.map(([label,to])=><FooterLink key={label} to={to}>{label}</FooterLink>)}</nav>
    <section aria-labelledby="footer-contact-title"><h2 id="footer-contact-title">Contact Us</h2><address className="footer-contact"><div><MapPin size={18}/><p>{contact.address.map(line=><span key={line}>{line}</span>)}</p></div>{contact.phones.map(number=><a key={number} href={'tel:+91'+number}><Phone size={17}/>{number}</a>)}<a href={'mailto:'+contact.email}><Mail size={17}/>{contact.email}</a></address></section>
  </div>
  <div className="footer-bottom"><div className="wrap"><p>© 2026 Prism Edu Consultancy. All rights reserved.</p><nav aria-label="Footer links"><a href="/sitemap.xml">Sitemap</a></nav></div></div>
</footer>}
