import React, { useState } from 'react';
import CarModelTypes from '../CarModelTypes/CarModelTypes';
import './EmployeeDefaultContainer.scss';

const EmployeeDefaultContainer = () => {
  const [isActiveCars, setIsActiveCars] = useState(false);
  let active = 'active';

  const handleOnClickCars = () => {
    setIsActiveCars(true);
  };

  return (
    <div className='employee-default-container'>
      <div className='cars-btn'>
        <div
          className={`cars ${isActiveCars ? active : ''}`}
          onClick={handleOnClickCars}
        >
          Cars
        </div>
      </div>
      {isActiveCars ? <CarModelTypes /> : null}
    </div>
  );
};

export default EmployeeDefaultContainer;
