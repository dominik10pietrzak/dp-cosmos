import React, { useRef, useState } from 'react';
import '../styles/Illustration.scss';

import Rocket from './Rocket';

import planet from '../assets/planet.svg';
import { Power1 } from 'gsap/dist/gsap';
import { TimelineMax } from 'gsap/dist/gsap';
import { MotionPathPlugin } from 'gsap/all';
import gsap from 'gsap/dist/gsap';

const Planet = () => {
  gsap.registerPlugin(MotionPathPlugin);
  const rocket = useRef(null);
  const tl = new TimelineMax();

  const [isRocketFlying, setIsRocketFlying] = useState(false);

  const fly = async () => {
    setIsRocketFlying(true);

    rocket.current.style.transform = 'rotate(90deg)';

    await tl.to(rocket.current, {
      duration: 8,
      motionPath: {
        path: [
          { x: 0, y: -600 },
          { x: 500, y: -200 },
          { x: 500, y: 1100 },
          { x: -1200, y: 500 },
          { x: -1200, y: -100 },
          { x: -500, y: -200 },
          { x: 0, y: 50 },
          { x: 0, y: 0 },
        ],
        curviness: 1,
        autoRotate: 90,
      },
      ease: Power1.easeInOut,
    });

    setIsRocketFlying(false);
  };

  return (
    <div className='illustration'>
      <Rocket rocketRef={rocket} isRocketFlying={isRocketFlying} />
      <img className='planet' src={planet} alt='planet-img' />
      <span
        className={`launch-button ${isRocketFlying && 'active'}`}
        onClick={fly}>
        {isRocketFlying ? 'Flying Now!' : 'Launch Rocket!'}
      </span>
    </div>
  );
};

export default Planet;
