import React, { useEffect } from 'react';
import './CSS/header.css';

const Header = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.nav-links a');
    
    // Smooth scrolling effect
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Highlight active link on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      
      sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - 50 && scrollPosition < section.offsetTop + section.offsetHeight - 50) {
          links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${section.id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="App-header">
      <div className="logo">
        <h3>zeke&#9679;betito</h3>
      </div>
      <div className="social-icons">
        {/* Add your social icons here */}
      </div>
      <nav className="nav-links">
        <a href="#add-about">About</a>
        <a href="#add-skills">Skills</a>
        <a href="#add-port">Portfolio</a>
        <a href="#add-exp">Experience</a>
        <a href="#add-cert">Certification</a>
        <a href="#add-resume">Resume</a>
      </nav>
    </header>
  );
};

export default Header;
