import React from 'react';
import '../styles/BackgroundItems.scss';

const BackgroundItems = () => {
  return (
    <div className='background-items'>
      {/* circles */}

      <div className='circle circle-1'>
        <div className='filler'></div>
      </div>
      <div className='circle circle-2'>
        <div className='filler'></div>
      </div>
      <div className='circle circle-3'>
        <div className='filler'></div>
      </div>

      {/* dots */}

      <span className='dot dot-1'></span>
      <span className='dot dot-2'></span>
      <span className='dot dot-3'></span>
      <span className='dot dot-4'></span>
    </div>
  );
};

export default BackgroundItems;
