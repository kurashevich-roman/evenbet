import React, { useState, useEffect } from 'react';

import Block1 from './Block1';
import Block2 from './Block2';
import Ball from './Ball';

import './App.css';

function App() {
  const [ballAnimationStarted, setBallAnimationStarted] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (ballAnimationStarted && animationTime < 5) {
      intervalId = setInterval(() => {
        setAnimationTime(prevTime => prevTime + 1);
      }, 1000);
    }

    if (animationTime === 5) {
      setBallAnimationStarted(false);
      setAnimationTime(0);
    }

    return () => clearInterval(intervalId);
  }, [ballAnimationStarted, animationTime]);

  const startAnimation = () => {
    setBallAnimationStarted(true);
    setAnimationTime(1);
  };

  return (
    <div className="app">
      {ballAnimationStarted && <Ball/>}
      <Block1 />
      <Block2 />
      <button onClick={startAnimation} disabled={ballAnimationStarted} className='startButton'>
        {ballAnimationStarted ? `${animationTime}` : 'START'}
      </button>
    </div>
  );
}

export default App;
