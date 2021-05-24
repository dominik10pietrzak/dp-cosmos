import React, { useState } from 'react';
import '../styles/LinkButtonList.scss';

import LinkButton from './LinkButton';
import Modal from './Modal';

import types from '../types';

const LinkButtonList = () => {
  const [currentType, setCurrentType] = useState({});
  const [visibility, setVisibility] = useState(false);

  return (
    <div className='link-button-list'>
      {types.map((type) => (
        <LinkButton
          key={type.type}
          type={type}
          setCurrentType={setCurrentType}
          setVisibility={setVisibility}
        />
      ))}
      <Modal
        currentType={currentType}
        visibility={visibility}
        setVisibility={setVisibility}
      />
    </div>
  );
};

export default LinkButtonList;
