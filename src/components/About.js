import React, { useRef } from 'react';
import useScrollAnimation from './useScrollAnimation';
import './CSS/about.css';

const About = () => {
  const aboutRef = useRef(null);
  useScrollAnimation(aboutRef, 'animate-on-scroll'); // Apply animation to 'animate-on-scroll' class

  return (
    <div id="add-about" className="about" ref={aboutRef}>
      <div className="divider animate-on-scroll"><span>About</span></div>
      <div className='marker animate-on-scroll'>
        <div className='y-mark'>

        </div>
        <div className='par'>
          <p>A proud graduate of Ateneo de Naga University, 
          I hold a Bachelor of Science in <span>Computer Science</span> with a 
          specialization in <span>app prototyping, Figma design, 
          and project and workflow management</span>. Throughout my academic 
          journey, I focused on mastering the art of creating 
          innovative applications and refining processes to achieve 
          greater efficiency and effectiveness. My strong technical 
          background is complemented by a robust understanding of 
          project management principles and best practices. 
          I have a proven track record of leading projects, <span>such as being a co-founder
          of a local tech startup</span> and 
          collaborating with diverse teams to drive high-quality 
          results and deliver impactful solutions. 
          My hands-on experience in both the technical and 
          managerial aspects of development equips me with a 
          unique perspective, allowing me to bridge gaps between 
          complex technical requirements and practical, 
          user-friendly applications.</p>
        </div>
      </div>
      {/* Uncomment and add animations to the following section if needed
      <div className="about-content animate-on-scroll">
        <div className="attributes">
          <h5>QPI</h5>
          <h5>Graduation Awards</h5>
          <h5>Thesis</h5>
        </div>
        <div className="attributes-cor">
          <h5>3.51</h5>
          <h5>Cum Laude Silver Achievement</h5>
          <h5>PathSentinel: Utilizing Convolutional Neural Networks for Image Verification on an Alternative Road Condition Monitoring System</h5>
        </div>
      </div>
      */}
    </div>
  );
};

export default About;
