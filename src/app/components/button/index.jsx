'use client';
import React, { useState } from 'react';

const button = () =>  {
  const [currentProp, setCurrentProp] = useState(0);
  const content = [
    'Content 1',
    'Content 2',
    'Content 3',
    'Content 4',
  ];
  
  const handleBackward = () => {
    setCurrentProp((prevButton) => prevButton - 1);
  };
  
  const handleForward = () => {
    setCurrentProp((prevButton) => prevButton + 1);
  };


    return (
      <div>
        <button onClick={handleBackward} disabled={currentProp === 0}>
          Backward button
        </button>
        <button onClick={handleForward} disabled={currentProp === content.length - 1}>
          Forward button
        </button>

        <div>
          {content[currentProp]}
        </div>
      </div>
    );
  }

export default button;

