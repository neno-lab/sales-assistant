import React, { useState } from 'react';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import './AddEmployee.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const AddEmployee = ({ open, onClose, loginProps }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roleId, setRoleId] = useState('');
  const config = {
    headers: {
      Authorization: `Bearer ${loginProps.token}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('tu sam');
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(username);
    // console.log(password);
    // console.log(roleId);

    try {
      const response = await TeamDSalesAssistant.post(
        '/api/users',
        {
          First_Name: firstName,
          Last_Name: lastName,
          Password: password,
          Username: username,
          Role_Id: roleId,
          Email: email,
        },
        config
      );
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }

    onClose();
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setlastName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeRoleId = (e) => {
    setRoleId(e.target.value);
  };

  if (!open) return null;
  return (
    <div className='add-employee-container'>
      <form className='add-employee-form' onSubmit={handleSubmit}>
        <div className='add-employee-card'>
          <div className='add-employee-title-exit'>
            <h2 className='add-employee-title'>Add Employee</h2>
            <div className='add-employee-exit' onClick={onClose}></div>
          </div>
          <div className='add-employee-input-holders'>
            <input
              type='text'
              className='add-employee-firstname'
              placeholder='First Name'
              onChange={onChangeFirstName}
              value={firstName}
            />
            <input
              type='text'
              className='add-employee-lastname'
              placeholder='Last Name'
              onChange={onChangeLastName}
              value={lastName}
            />
            <input
              type='email'
              className='add-employee-email'
              placeholder='Email Adress'
              onChange={onChangeEmail}
              value={email}
            />
            <input
              type='text'
              className='add-employee-username'
              placeholder='Username'
              onChange={onChangeUsername}
              value={username}
            />
            <input
              type='text'
              className='add-employee-password'
              placeholder='Password'
              onChange={onChangePassword}
              value={password}
            />
            <input
              type='text'
              className='add-employee-roleid'
              placeholder='Role Id'
              onChange={onChangeRoleId}
              value={roleId}
            />
          </div>
          <div className='add-employee-btn'>
            <button type='submit' className='add-employee-btn-btn'>
              Add Employee
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

export default connect(mapStateToProps, null)(AddEmployee);
