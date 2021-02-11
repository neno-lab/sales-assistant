import React, { useEffect, useState } from 'react';
import AddEmployee from '../AddEmployee/AddEmployee';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './EmployeesList.scss';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { getAllEmployees } from '../../redux/actions/actions';

const EmployeesList = ({ employeesList, loginProps, getAllEmployees }) => {
  const [isOpenModalAddEmployee, setIsOpenModalEmplyee] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TeamDSalesAssistant.get('/api/users/admin', {
          headers: {
            Authorization: `Bearer ${loginProps.token}`,
          },
        });
        getAllEmployees(response.data.EmployeesList);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [getAllEmployees, loginProps.token]);

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
    loginProps: state.reducer.loginProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEmployees: bindActionCreators(getAllEmployees, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);
