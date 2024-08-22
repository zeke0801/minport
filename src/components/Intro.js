import React from 'react';
import './CSS/intro.css'
import CopyPaste from './CopyPaste';

const socialLinks = [
  { href: 'https://www.upwork.com/freelancers/~01ed1a15cbe8526049', src: '/img/upwork.svg', alt: 'LinkedIn' },
  { href: 'https://www.linkedin.com/in/joseph-raphael-betito-8b4523227/', src: '/img/linkedin.svg', alt: 'Upwork' },
];

const Intro = () => (
  <div className="intro">
    <div className="intro-one">
      <div className="intro-text">
        <h1>Hello, I'm Zeke <br />
        I enjoy pursuing <span>user-first design.</span></h1>
        <h3>Creative Front-End Developer and Designer with a flair for innovation and a strong background in project management.<br/> 
        Previously worked on a thesis-turned startup project for a local government.<br />
        <CopyPaste/></h3>
      </div>
      <div className="socials">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            <img src={link.src} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Intro;
