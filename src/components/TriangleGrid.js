import React, { useRef } from 'react';
import useScrollAnimation from './useScrollAnimation';
import './CSS/triangleGrid.css'; // Ensure you have the correct CSS file for styling

const TriangleGrid = ({ skills }) => {
  const containerRef = useRef(null);
  useScrollAnimation(containerRef, 'block'); // Apply animation to 'block' class

  // Calculate number of rows needed for the inverted triangle shape
  const numRows = Math.ceil(Math.sqrt(2 * skills.length));
  // Generate row lengths: start from numRows and decrease by 1 for each row
  const rows = Array.from({ length: numRows }, (_, i) => numRows - i);

  let index = 0;

  return (
    <div className="triangleGrid" ref={containerRef}>
      {rows.map((numBlocks, rowIndex) => (
        <div key={rowIndex} className="triangleRow">
          {Array.from({ length: numBlocks }).map((_, blockIndex) => {
            if (index < skills.length) {
              const skill = skills[index++];
              return (
                <div
                  key={blockIndex}
                  className="aoe-block block"
                >
                  <img src={skill.img} alt={skill.label} /><br />
                  {skill.label}
                  <div className="block-info">{skill.years}</div>
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default TriangleGrid;
