import React from 'react';
import './Block.css';
import Ball from './Ball';

function Block1({ animationStarted, ballAnimationStarted }) {
  return (
    <div className={`block1 ${animationStarted ? 'animated' : ''}`}>
      Block 1
      {ballAnimationStarted && <Ball/>}
    </div>
  );
}

export default Block1;
