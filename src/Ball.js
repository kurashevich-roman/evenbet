import React, { useEffect, useRef } from 'react';

import './Ball.css';


function Ball() {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;

    const recalculatePosition = () => {
      const block1 = document.querySelector('.block1');
      const block1Rect = block1.getBoundingClientRect();
      
      const block2 = document.querySelector('.block2');
      const block2Rect = block2.getBoundingClientRect();

      const ballRect = ball.getBoundingClientRect();

      ball.style.top = `${block1Rect.top + block1Rect.height / 2 - ballRect.height / 2}px`;
      ball.style.left = `${block1Rect.width / 2 - ballRect.width / 2}px`;
      
      const animationContainer = document.querySelector('.app');
      const animationContainerRect = animationContainer.getBoundingClientRect();

      const offsetX = (animationContainerRect.width - block2Rect.width);
      const offsetY = (block2Rect.top - block1Rect.top);

      ball.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    const handleAnimationEnd = () => {
      ball.style.display = 'none';
    };

    ball.addEventListener('transitionend', handleAnimationEnd);
    window.addEventListener('resize', recalculatePosition);
    
    recalculatePosition();

    return () => {
      ball.removeEventListener('transitionend', handleAnimationEnd);
      window.removeEventListener('resize', recalculatePosition);
    };
  }, []);

  return <div ref={ballRef} className="ball" />;
}

export default Ball;
