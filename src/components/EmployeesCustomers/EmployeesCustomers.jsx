import React, { useState } from 'react';
import CustomersList from '../CustomersList/CustomersList';
import EmployeesList from '../EmployeesList/EmployeesList';
import './EmployeesCustomers.scss';

const EmployeesCustomers = () => {
  const [isActiveEmployees, setIsActiveEmployees] = useState(false);
  const [isActiveCustomers, setIsActiveCustomers] = useState(false);
  let active = 'active';

  const handleOnClickEmpoyees = () => {
    setIsActiveEmployees(true);
    setIsActiveCustomers(false);
  };

  const handleOnClickCustomers = () => {
    setIsActiveEmployees(false);
    setIsActiveCustomers(true);
  };

  return (
    <>
      <div className='employees-customers'>
        <div
          className={`employees ${isActiveEmployees ? active : ''}`}
          onClick={handleOnClickEmpoyees}
        >
          Employees
        </div>
        <div
          className={`customers ${isActiveCustomers ? active : ''}`}
          onClick={handleOnClickCustomers}
        >
          Customers
        </div>
      </div>

      {isActiveEmployees ? <EmployeesList /> : null}
      {isActiveCustomers ? <CustomersList /> : null}
    </>
  );
};

export default EmployeesCustomers;
