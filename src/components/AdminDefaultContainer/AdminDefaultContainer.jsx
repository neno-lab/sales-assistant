import React, { useState } from 'react';
// import CarModelTypes from '../CarModelTypes/CarModelTypes';
import AdminEmployeeCars from '../AdminEmployeeCars/AdminEmployeeCars';
import EmployeesCustomers from '../EmployeesCustomers/EmployeesCustomers';
import './AdminDefaultContainer.scss';

const AdminDefaultContainer = () => {
  const [isActiveUsers, setIsActiveUsers] = useState(false);
  const [isActiveCars, setIsActiveCars] = useState(false);
  let active = 'active';

  const handleOnClickUsers = () => {
    setIsActiveUsers(true);
    setIsActiveCars(false);
  };

  const handleOnClickCars = () => {
    setIsActiveUsers(false);
    setIsActiveCars(true);
  };

  return (
    <div className='admin-default-container'>
      <div className='users-cars'>
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
      </div>

      {isActiveUsers ? <EmployeesCustomers /> : null}
      {isActiveCars ? <AdminEmployeeCars /> : null}
    </div>
  );
};

export default AdminDefaultContainer;
