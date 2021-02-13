import React, { useState } from 'react';
import AdminEmployeeCars from '../AdminEmployeeCars/AdminEmployeeCars';
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
      {isActiveCars ? <AdminEmployeeCars /> : null}
    </div>
  );
};

export default EmployeeDefaultContainer;
