import React, { useEffect, useState } from 'react';
import AddEmployee from '../AddEmployee/AddEmployee';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './EmployeesList.scss';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { deleteEmployee, getAllEmployees } from '../../redux/actions/actions';
import UpdateEmployee from '../UpdateEmployee/UpdateEmployee';

const EmployeesList = ({
  employeesList,
  loginProps,
  getAllEmployees,
  deleteEmployee,
}) => {
  const [isOpenModalAddEmployee, setIsOpenModalAddEmployee] = useState(false);
  const [isOpenModalEditEmployee, setIsOpenModalEditEmployee] = useState(false);
  const [editProps, setEditProps] = useState({});

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
    setIsOpenModalAddEmployee(true);
  };

  const onClickEdit = (e, employee) => {
    // console.log('employee', employee);
    e.stopPropagation();
    setIsOpenModalEditEmployee(true);
    setEditProps(employee);
  };

  const handleDeleteEmployee = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await TeamDSalesAssistant.delete(`/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${loginProps.token}`,
        },
      });
      console.log(response);
      deleteEmployee(id);
    } catch (err) {
      console.error(err.message);
    }
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
            <tr
              className='row-item'
              key={Math.random().toString(36).substr(2, 9)}
            >
              <td className='item'>{employee.User_Id}</td>
              <td className='item'>{employee.First_Name}</td>
              <td className='item'>{employee.Last_Name}</td>
              <td className='item'>{employee.Username}</td>
              <td className='item'>{employee.Email}</td>
              <td className='item'>{employee.Role_Id}</td>
              <td className='item'>
                <button
                  className='edit-btn'
                  onClick={(e) => onClickEdit(e, employee)}
                >
                  Edit
                </button>
              </td>
              <td className='item'>
                <button
                  className='delete-btn'
                  onClick={(e) => handleDeleteEmployee(e, employee.User_Id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddEmployee
        open={isOpenModalAddEmployee}
        onClose={() => setIsOpenModalAddEmployee(false)}
      />
      <UpdateEmployee
        open={isOpenModalEditEmployee}
        onClose={() => setIsOpenModalEditEmployee(false)}
        editProps={editProps}
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
    deleteEmployee: bindActionCreators(deleteEmployee, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);
