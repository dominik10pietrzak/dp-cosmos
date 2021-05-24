import React from 'react';
import '../styles/LinkButton.scss';

const LinkButton = ({ type, setCurrentType, setVisibility }) => {
  const imageUrl = require(`../assets/${type.type}.svg`).default;

  const handleLoadImage = (image) => {
    image.style.opacity = '1';
  };

  const handleClick = () => {
    setCurrentType(type);
    setVisibility(true);
  };

  return (
    <div className='link-button' onClick={handleClick}>
      <img
        className='background'
        src={imageUrl}
        alt='rockets'
        onLoad={(e) => handleLoadImage(e.target)}
      />
      <div className='overlay'>
        <span className='details'>Details</span>
      </div>
      <span className='type'>{type.type}</span>
    </div>
  );
};

export default LinkButton;
