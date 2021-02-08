import React from 'react';
import { connect } from 'react-redux';
import './CustomersList.scss';

const CustomersList = ({ customersList }) => {
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
          <tr className='row-item' key={customer.Used_Id}>
            <td className='item'>{customer.User_Id}</td>
            <td className='item'>{customer.First_Name}</td>
            <td className='item'>{customer.Last_Name}</td>
            <td className='item'>{customer.Username}</td>
            <td className='item'>{customer.Email}</td>
            <td className='item'>{customer.Role_Id}</td>
            <td className='item'>
              <button className='delete-btn'>Delete</button>
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
  };
};

export default connect(mapStateToProps, null)(CustomersList);
