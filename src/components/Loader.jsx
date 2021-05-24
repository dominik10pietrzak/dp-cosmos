import React from 'react';
import '../styles/Loader.scss';

const Loader = ({ loading }) => {
  return (
    <div className={`loader ${!loading ? 'hidden' : ''}`}>
      <div className='lds-dual-ring'></div>
    </div>
  );
};

export default Loader;
