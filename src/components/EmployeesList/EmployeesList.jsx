import React, { useState } from 'react';
import AddEmployee from '../AddEmployee/AddEmployee';
import { connect } from 'react-redux';
import './EmployeesList.scss';

const EmployeesList = ({ employeesList }) => {
  const [isOpenModalAddEmployee, setIsOpenModalEmplyee] = useState(false);

  const onClickPlus = () => {
    setIsOpenModalEmplyee(true);
  };

  return (
    <>
      <div className='add-icon'>
        <i className='fas fa-plus-circle' onClick={onClickPlus}></i>
      </div>
      <table className='content-table'>
        <thead>
          <tr className='row-title'>
            <th className='title'>User Id</th>
            <th className='title'>First Name</th>
            <th className='title'>Last Name</th>
            <th className='title'>Username</th>
            <th className='title'>Email</th>
            <th className='title'>Role</th>
            <th className='title'>Edit</th>
            <th className='title'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((employee) => (
            <tr className='row-item' key={employee.User_Id}>
              <td className='item'>{employee.User_Id}</td>
              <td className='item'>{employee.First_Name}</td>
              <td className='item'>{employee.Last_Name}</td>
              <td className='item'>{employee.Username}</td>
              <td className='item'>{employee.Email}</td>
              <td className='item'>{employee.Role_Id}</td>
              <td className='item'>
                <button className='edit-btn'>Edit</button>
              </td>
              <td className='item'>
                <button className='delete-btn'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddEmployee
        open={isOpenModalAddEmployee}
        onClose={() => setIsOpenModalEmplyee(false)}
      />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    employeesList: state.reducer.employeesList,
  };
};

export default connect(mapStateToProps, null)(EmployeesList);
