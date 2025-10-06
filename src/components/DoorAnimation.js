import React, { useState, useEffect } from 'react';
import '../styles/DoorAnimation.css';

const DoorAnimation = ({ onAnimationComplete }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    const completeTimer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className="door-container">
      <div className={`door-left ${animationStarted ? 'open' : ''}`}></div>
      <div className={`door-right ${animationStarted ? 'open' : ''}`}></div>
      <div className={`logo-container ${animationStarted ? 'spin' : ''}`}>
        <div className="logo-background"></div>
        <img src="/images/logo.png" alt="DJ SURU Logo" className="logo" />
      </div>
    </div>
  );
};

export default DoorAnimation;