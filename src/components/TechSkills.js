import React from 'react';
import TriangleGrid from './TriangleGrid';
import './CSS/techskills.css';

const skills = [
  { img: '/img/html.svg', label: 'HTML', years: '6+ Years' },
  { img: '/img/css.svg', label: 'CSS', years: '6+ Years' },
  { img: '/img/javascript.svg', label: 'JavaScript', years: '6+ Years' },
  { img: '/img/react.svg', label: 'React', years: '1+ Years' },
  { img: '/img/python.svg', label: 'Python', years: '4+ Years' },
  { img: '/img/github.svg', label: 'Github', years: '2+ Years' },
  { img: '/img/figma.svg', label: 'Figma', years: '4+ Years' },
  { img: '/img/hubspot.svg', label: 'Hubspot', years: '1+ Year' },
  { img: '/img/wordpress.svg', label: 'WordPress', years: '1+ Year' },
  { img: '/img/wix.svg', label: 'Wix', years: '1+ Year' },
  { img: '/img/teams.svg', label: 'Teams', years: '1+ Year' },
  { img: '/img/clickup.svg', label: 'ClickUp', years: '6+ Year' },
  { img: '/img/docs.svg', label: 'G-Docs', years: '6+ Year' },
  { img: '/img/forms.svg', label: 'G-Forms', years: '3+ Year' },
  { img: '/img/slides.svg', label: 'G-Slides', years: '6+ Year' },
  { img: '/img/calendar.svg', label: 'G-Calendar', years: '6+ Year' },
  { img: '/img/sheets.svg', label: 'G-Sheets', years: '6+ Year' },
  { img: '/img/not1.svg', label: 'Notion', years: '1+ Year' },
];

const AreaOfExpertise = () => (
  <div id="add-skills" className="aoe">
    <h1>My Skills</h1>
    <TriangleGrid skills={skills} />
  </div>
);

export default AreaOfExpertise;
