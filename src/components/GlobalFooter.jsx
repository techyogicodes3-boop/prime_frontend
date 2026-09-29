import {ArrowRight,BriefcaseBusiness,Camera,Globe2,Mail,MapPin,MessageCircle,Phone,PhoneCall} from 'lucide-react';
import {Link} from 'react-router-dom';

const contact={
  address:['Pimpri Nilakh,Pune, Maharashtra-411027'],
  phones:['9518963309'],
  email:'info@prismedu.in',
  whatsapp:'https://wa.me/919518963309',
};

const socialLinks=[
  {label:'WhatsApp',url:contact.whatsapp,Icon:MessageCircle},
  {label:'LinkedIn',url:'https://www.linkedin.com/in/prajkta-shinde-3a1690143?utm_source=share_via&utm_content=profile&utm_medium=member_ios',Icon:BriefcaseBusiness},
  {label:'Facebook',url:'https://www.facebook.com/p/Prism-Edu-Consultancy-61594655243393/',Icon:Globe2},
  {label:'Instagram',url:'https://www.instagram.com/prismedu2026/',Icon:Camera},
];

const quickLinks=[['Home','/'],['About Us','/about'],['School Properties','/school-properties'],['Our Services','/services'],['Shop School Material','/school-materials'],['Resources','/resources'],['Contact Us','/contact'],['Request Consultation','/contact#contact-form']];
const serviceLinks=[['School Services','/services#school-services'],['School Properties & Support Services','/services#school-properties-support'],['Industry Associates','/services#industry-associates-services'],['Licensing & Legal Support Services','/services#licensing-legal'],['Web & Digital Solutions Services','/services#digital-services']];
const policyLinks=[['Sitemap','/sitemap.xml']];

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
    <section className="footer-brand" aria-labelledby="footer-brand-title"><img src="/images/prism-official/prism-logo.jpg" alt="Prism Edu Consultancy" width="190" height="150" loading="lazy"/><h2 id="footer-brand-title" className="sr-only">Prism Edu Consultancy</h2><p>Prism Edu Consultancy supports school founders, management teams, educators, and education entrepreneurs through practical guidance, professional services, and sustainable institutional-development solutions.</p><strong>Supporting Educational Institutions from Vision to Growth.</strong><div className="footer-socials">{socialLinks.map(({label,url,Icon})=><a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon size={18}/></a>)}</div></section>
    <nav aria-labelledby="footer-quick-title"><h2 id="footer-quick-title">Quick Links</h2>{quickLinks.map(([label,to])=><FooterLink key={label} to={to}>{label}</FooterLink>)}</nav>
    <nav aria-labelledby="footer-services-title"><h2 id="footer-services-title">Our Core Services</h2>{serviceLinks.map(([label,to])=><FooterLink key={label} to={to}>{label}</FooterLink>)}</nav>
    <nav aria-labelledby="footer-info-title"><h2 id="footer-info-title">Professional Information</h2>{policyLinks.map(([label,to])=><FooterLink key={label} to={to}>{label}</FooterLink>)}</nav>
    <section aria-labelledby="footer-contact-title"><h2 id="footer-contact-title">Contact Us</h2><address className="footer-contact"><div><MapPin size={18}/><p>{contact.address.map(line=><span key={line}>{line}</span>)}</p></div>{contact.phones.map(number=><a key={number} href={'tel:+91'+number}><Phone size={17}/>{number}</a>)}<a href={'mailto:'+contact.email}><Mail size={17}/>{contact.email}</a></address></section>
  </div>
  <div className="footer-bottom"><div className="wrap"><p>© 2026 Prism Edu Consultancy. All rights reserved.</p><nav aria-label="Footer links"><a href="/sitemap.xml">Sitemap</a></nav></div></div>
</footer>}
