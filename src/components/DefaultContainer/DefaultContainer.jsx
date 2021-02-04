import React, { useEffect } from 'react';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import './DefaultContainer.scss';

const DefaultContainer = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await TeamDSalesAssistant.get('/api/cars/suv');
  //       console.log(response);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className='default-container'>
      <h2>Welcome to Team-D Sales Assistant!</h2>
      <h1>CHOOSE YOUR MODEL BELOW</h1>
      <div className='cards'>
        <div className='card'>
          <h3>Hatchback</h3>
          <div className='img-hatchback'></div>
        </div>
        <div className='card'>
          <h3>Sedan</h3>
          <div className='img-sedan'></div>
        </div>
        <div className='card'>
          <h3>SUV</h3>
          <div className='img-suv'></div>
        </div>
      </div>
    </div>
  );
};

export default DefaultContainer;
