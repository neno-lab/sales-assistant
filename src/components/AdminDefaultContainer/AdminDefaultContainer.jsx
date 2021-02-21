import React, { useState } from 'react';
// import CarModelTypes from '../CarModelTypes/CarModelTypes';
import AdminEmployeeCars from '../AdminEmployeeCars/AdminEmployeeCars';
import EmployeesCustomers from '../EmployeesCustomers/EmployeesCustomers';
import Sales from '../Sales/Sales';
import './AdminDefaultContainer.scss';

const AdminDefaultContainer = () => {
  const [isActiveUsers, setIsActiveUsers] = useState(false);
  const [isActiveCars, setIsActiveCars] = useState(false);
  const [isActiveSales, setIsActiveSales] = useState(false);
  let active = 'active';

  const handleOnClickUsers = () => {
    setIsActiveUsers(true);
    setIsActiveCars(false);
    setIsActiveSales(false);
  };

  const handleOnClickCars = () => {
    setIsActiveUsers(false);
    setIsActiveCars(true);
    setIsActiveSales(false);
  };

  const handleOnClickSales = () => {
    setIsActiveUsers(false);
    setIsActiveCars(false);
    setIsActiveSales(true);
  };

  return (
    <div className='admin-default-container'>
      <div className='users-cars-sales'>
        <div
          className={`users ${isActiveUsers ? active : ''}`}
          onClick={handleOnClickUsers}
        >
          Users
        </div>
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

      {isActiveUsers ? <EmployeesCustomers /> : null}
      {isActiveCars ? <AdminEmployeeCars /> : null}
      {isActiveSales ? <Sales /> : null}
    </div>
  );
};

export default AdminDefaultContainer;
