import React from 'react';
import '../styles/Rocket.scss';

import rocket from '../assets/rocket.svg';
import landingGear from '../assets/landing-gear.svg';
import smoke1 from '../assets/smoke1.svg';
import smoke2 from '../assets/smoke2.svg';

const Rocket = ({ rocketRef, isFlying }) => {
  return (
    <div className={`rocket ${isFlying && 'flying'}`} ref={rocketRef}>
      <img className='smoke-one' src={smoke1} alt='smoke1' />
      <div className='center'>
        <img className='rocket-img' src={rocket} alt='rocket' />
        <img
          className='landing-gear-img'
          src={landingGear}
          alt='landing-gear'
        />
      </div>
      <img className='smoke-two' src={smoke2} alt='smoke2' />
    </div>
  );
};

export default Rocket;
