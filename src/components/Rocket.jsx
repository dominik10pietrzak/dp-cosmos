import React from 'react';
import '../styles/Rocket.scss';

import rocket from '../assets/rocket.svg';
import landingGear from '../assets/landing-gear.svg';
import smoke1 from '../assets/smoke1.svg';
import smoke2 from '../assets/smoke2.svg';

const Rocket = ({ rocketRef, isRocketFlying }) => {
  return (
    <div className={`rocket ${isRocketFlying && 'flying'}`} ref={rocketRef}>
      <img className='smoke-left' src={smoke1} alt='smoke1' />
      <div className='center'>
        <img className='rocket-img' src={rocket} alt='rocket' />
        <img
          className='landing-gear-img'
          src={landingGear}
          alt='landing-gear'
        />
      </div>
      <img className='smoke-right' src={smoke2} alt='smoke2' />
    </div>
  );
};

export default Rocket;
