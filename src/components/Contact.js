import React from 'react';
import './CSS/contact.css';

const socialLinks = [
  { href: 'https://www.upwork.com/freelancers/~01ed1a15cbe8526049', src: '/img/linkedin.svg', alt: 'LinkedIn' },
  { href: 'https://www.linkedin.com/in/joseph-raphael-betito-8b4523227/', src: '/img/upwork.svg', alt: 'Upwork' },
];

const Contact = () => (
<div id="add-contact" className="container">
  <div className="colored-div">
    <span></span><h1>Contact Me</h1><span></span>
  </div>
  <div className='sect-cont'>
    <div className='email'><img src="/img/email.svg" alt='email'></img> 
      jlbetito0801@gmail.com
    </div>
    <div className='phone'><img src="/img/phone.svg" alt='phone'></img> 
      +63 917 123 7040
    </div>
  </div>
  <div className="inv-colored-div">
    <span></span>
    {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.src} alt={link.alt} />
          </a>
    ))}
    <span></span>
  </div>
</div>
  
);

export default Contact;
