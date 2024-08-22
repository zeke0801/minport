import React, { useRef } from 'react';
import './CSS/CopyPaste.css'; // Import the external CSS file

function CopyPaste() {
  const emailRef = useRef(null);

  const handleCopy = () => {
    emailRef.current.select();
    document.execCommand('copy');
    alert('Email Copied');
  };

  return (
    <div>
      <h3 className="email-header">
        Email me at: <a href="mailto:jlbetito0801@gmail.com?subject=Freelancer:%20Joseph%20Raphael%20Betito&body=Hi%20there!%20I'm%20an%20interested%20client,%20can%20we%20discuss%20about:%20(job%20here)?">
          jlbetito0801@gmail.com
        </a>
        <input
          type="text"
          ref={emailRef}
          value="jlbetito0801@gmail.com"
          readOnly
          className="email-input"
        />
        <img
          src="/img/copy.svg" // Adjust the path to where your SVG file is located
          alt="Copy"
          onClick={handleCopy}
          className="copy-icon"
        />
      </h3>
    </div>
  );
}

export default CopyPaste;
