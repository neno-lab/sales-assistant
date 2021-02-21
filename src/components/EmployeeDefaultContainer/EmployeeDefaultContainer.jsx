import React, { useState } from 'react';
import AdminEmployeeCars from '../AdminEmployeeCars/AdminEmployeeCars';
import Sales from '../Sales/Sales';
import './EmployeeDefaultContainer.scss';

const EmployeeDefaultContainer = () => {
  const [isActiveCars, setIsActiveCars] = useState(false);
  const [isActiveSales, setIsActiveSales] = useState(false);
  let active = 'active';

  const handleOnClickCars = () => {
    setIsActiveCars(true);
    setIsActiveSales(false);
  };

  const handleOnClickSales = () => {
    setIsActiveCars(false);
    setIsActiveSales(true);
  };

  return (
    <div className='employee-default-container'>
      <div className='cars-sales'>
        <div
          className={`cars ${isActiveCars ? active : ''}`}
          onClick={handleOnClickCars}
        >
          Cars
        </div>
        <div
          className={`sales ${isActiveSales ? active : ''}`}
          onClick={handleOnClickSales}
        >
          Sales
        </div>
      </div>
      {isActiveCars ? <AdminEmployeeCars /> : null}
      {isActiveSales ? <Sales /> : null}
    </div>
  );
};

export default EmployeeDefaultContainer;
