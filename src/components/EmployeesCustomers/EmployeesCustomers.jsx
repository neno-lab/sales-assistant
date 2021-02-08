import React, { useState } from 'react';
import CustomersList from '../CustomersList/CustomersList';
import EmployeesList from '../EmployeesList/EmployeesList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './EmployeesCustomers.scss';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { getAllCustomers, getAllEmployees } from '../../redux/actions/actions';

const EmployeesCustomers = ({
  loginProps,
  getAllEmployees,
  getAllCustomers,
}) => {
  const [isActiveEmployees, setIsActiveEmployees] = useState(false);
  const [isActiveCustomers, setIsActiveCustomers] = useState(false);
  let active = 'active';
  const config = {
    headers: {
      Authorization: `Bearer ${loginProps.token}`,
    },
  };

  const handleOnClickEmpoyees = async () => {
    try {
      const response = await TeamDSalesAssistant.get(
        '/api/users/admin',
        config
      );
      console.log(response);
      getAllEmployees(response.data.EmployeesList);
      setIsActiveEmployees(true);
      setIsActiveCustomers(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleOnClickCustomers = async () => {
    try {
      const response = await TeamDSalesAssistant.get(
        '/api/users/admin',
        config
      );
      console.log(response);
      getAllCustomers(response.data.CustomersList);
      setIsActiveEmployees(false);
      setIsActiveCustomers(true);
    } catch (err) {
      console.log(err.message);
    }
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

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEmployees: bindActionCreators(getAllEmployees, dispatch),
    getAllCustomers: bindActionCreators(getAllCustomers, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesCustomers);
