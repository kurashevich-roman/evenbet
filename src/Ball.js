import React, { useEffect, useRef } from 'react';
import './Ball.css';


function Ball() {
  const ballRef = useRef(null);
  console.log('ball')

  useEffect(() => {
    const block2 = document.querySelector('.block2');
    const block2Rect = block2.getBoundingClientRect();
    const ball = ballRef.current;
    const ballRect = ball.getBoundingClientRect();
    const animationContainer = document.querySelector('.animationContainer');
    const animationContainerRect = animationContainer.getBoundingClientRect();


    const offsetX = (animationContainerRect.width - block2Rect.width - ballRect.width);
    const offsetY = (block2Rect.top);

    ball.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    const handleAnimationEnd = () => {
      ball.style.display = 'none';
    };

    ball.addEventListener('transitionend', handleAnimationEnd);

    return () => {
      ball.removeEventListener('transitionend', handleAnimationEnd);
    };
  }, []);

  return <div ref={ballRef} className="ball" />;
}

export default Ball;
