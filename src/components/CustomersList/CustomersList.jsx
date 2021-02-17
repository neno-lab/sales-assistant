import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { deleteCustomer, getAllCustomers } from '../../redux/actions/actions';
import './CustomersList.scss';

const CustomersList = ({
  customersList,
  loginProps,
  getAllCustomers,
  deleteCustomer,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TeamDSalesAssistant.get('/api/users/admin', {
          headers: {
            Authorization: `Bearer ${loginProps.token}`,
          },
        });
        getAllCustomers(response.data.CustomersList);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [getAllCustomers, loginProps]);

  const handleDeleteCustomer = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await TeamDSalesAssistant.delete(`/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${loginProps.token}`,
        },
      });
      deleteCustomer(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <table className='content-table'>
      <thead>
        <tr className='row-title'>
          <th className='title'>User Id</th>
          <th className='title'>First Name</th>
          <th className='title'>Last Name</th>
          <th className='title'>Username</th>
          <th className='title'>Email</th>
          <th className='title'>Role</th>
          <th className='title'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {customersList.map((customer) => (
          <tr
            className='row-item'
            key={Math.random().toString(36).substr(2, 9)}
          >
            <td className='item'>{customer.User_Id}</td>
            <td className='item'>{customer.First_Name}</td>
            <td className='item'>{customer.Last_Name}</td>
            <td className='item'>{customer.Username}</td>
            <td className='item'>{customer.Email}</td>
            <td className='item'>{customer.Role_Id}</td>
            <td className='item'>
              <button
                className='delete-btn'
                onClick={(e) => handleDeleteCustomer(e, customer.User_Id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    customersList: state.reducer.customersList,
    loginProps: state.reducer.loginProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCustomers: bindActionCreators(getAllCustomers, dispatch),
    deleteCustomer: bindActionCreators(deleteCustomer, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
