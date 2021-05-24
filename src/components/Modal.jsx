import React, { useEffect, useState } from 'react';
import '../styles/Modal.scss';

import { getData } from '../redux/actions';

import hide from '../assets/hide.svg';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';

import arrowUp from '../assets/arrow-up.svg';
import arrowDown from '../assets/arrow-down.svg';
import arrowSM from '../assets/arrows.svg';

const Modal = ({ currentType, isModalVisible, setVisibility }) => {
  const [sortMethod, setSortMethod] = useState('unsorted');

  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.apiData);

  const sortData = (a, b) => {
    if (sortMethod === 'ascending') {
      return a[currentType.fieldOne] > b[currentType.fieldOne] ? 1 : -1;
    } else if (sortMethod === 'descending') {
      return b[currentType.fieldOne] > a[currentType.fieldOne] ? 1 : -1;
    }

    return 0;
  };

  useEffect(() => {
    dispatch(getData(currentType.type));
  }, [currentType]);

  useEffect(() => {
    if (sortMethod === 'unsorted') {
      dispatch(getData(currentType.type));
    }
  }, [sortMethod]);

  return (
    <div className={`modal ${!isModalVisible ? 'hidden' : ''}`}>
      <div className='topbar'>
        <h3 className='heading'>{currentType.type}</h3>
        <img
          className='hide-button'
          src={hide}
          alt='hide'
          onClick={() => setVisibility(false)}
        />
      </div>
      <div className='content'>
        {/* Zdecydowałem się na taki sposób użycia Loadera zamiast np. {loading && <Loader />} ponieważ aplikacja
        jest na tyle mała, że nie będzie to miało praktycznie żadnego wpływu na działanie, a pozwoli na ładniejszą
        animację */}
        <Loader loading={loading} />
        <table className='data-table'>
          <thead>
            <tr className='upper-row'>
              <th className='head-left'>
                {currentType.fieldOne}
                <div className='sort-button-wrapper'>
                  {sortMethod === 'unsorted' ? (
                    <img
                      className='sort-button'
                      src={arrowSM}
                      alt='arrow-up'
                      onClick={() => setSortMethod('ascending')}
                    />
                  ) : sortMethod === 'ascending' ? (
                    <img
                      className='sort-button'
                      src={arrowUp}
                      alt='arrow-up'
                      onClick={() => setSortMethod('descending')}
                    />
                  ) : (
                    <img
                      className='sort-button'
                      src={arrowDown}
                      alt='arrow-down'
                      onClick={() => setSortMethod('unsorted')}
                    />
                  )}
                </div>
              </th>
              <th className='head-right'>{currentType.fieldTwo}</th>
            </tr>
          </thead>
          <tbody className={data?.length === 0 ? 'content-hidden' : ''}>
            {data?.sort(sortData).map((col, idx) => (
              <tr key={idx}>
                <td>{col[currentType.fieldOne]}</td>
                <td>{col[currentType.fieldTwo]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='gradient'></div>
      </div>
    </div>
  );
};

export default Modal;
