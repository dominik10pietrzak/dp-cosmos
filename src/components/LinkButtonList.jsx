import React, { useState } from 'react';
import '../styles/LinkButtonList.scss';

import LinkButton from './LinkButton';
import Modal from './Modal';

import types from '../assets/apiDataTypes';

const LinkButtonList = () => {
  const [currentType, setCurrentType] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className='link-button-list'>
      {types.map((type) => (
        <LinkButton
          key={type.type}
          type={type}
          setCurrentType={setCurrentType}
          setVisibility={setIsModalVisible}
        />
      ))}
      <Modal
        currentType={currentType}
        isModalVisible={isModalVisible}
        setVisibility={setIsModalVisible}
      />
    </div>
  );
};

export default LinkButtonList;
