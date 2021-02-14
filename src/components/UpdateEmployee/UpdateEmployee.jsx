import React, { useState, useEffect } from 'react';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import './UpdateEmployee.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEmployee } from '../../redux/actions/actions';

const UpdateEmployee = ({
  open,
  onClose,
  loginProps,
  editProps,
  updateEmployee,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roleId, setRoleId] = useState('');
  const config = {
    headers: {
      Authorization: `Bearer ${loginProps.token}`,
    },
  };

  useEffect(() => {
    setFirstName(editProps.First_Name);
    setLastName(editProps.Last_Name);
    setEmail(editProps.Email);
    setUsername(editProps.Username);
    setPassword(editProps.Password);
    setRoleId(editProps.Role_Id);
  }, [editProps]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(firstName);
    console.log(lastName);

    try {
      const response = await TeamDSalesAssistant.put(
        '/api/users',
        {
          User_Id: editProps.User_Id,
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
      updateEmployee(response.config.data);
    } catch (err) {
      console.error(err.message);
    }

    onClose();
  };

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setLastName(e.target.value);
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
    <div className='update-employee-container'>
      <form className='update-employee-form' onSubmit={handleSubmit}>
        <div className='update-employee-card'>
          <div className='update-employee-title-exit'>
            <h2 className='update-employee-title'>Update</h2>
            <div className='update-employee-exit' onClick={onClose}></div>
          </div>
          <div className='update-employee-input-holders'>
            <input
              id='firstname'
              type='text'
              className='update-employee-firstname'
              placeholder='First Name'
              onChange={(e) => onChangeFirstName(e)}
              value={firstName || ''}
            />
            <input
              id='lastname'
              type='text'
              className='update-employee-lastname'
              placeholder='Last Name'
              onChange={(e) => onChangeLastName(e)}
              value={lastName || ''}
            />
            <input
              id='email'
              type='email'
              className='update-employee-email'
              placeholder='Email Adress'
              onChange={(e) => onChangeEmail(e)}
              value={email || ''}
            />
            <input
              id='username'
              type='text'
              className='update-employee-username'
              placeholder='Username'
              onChange={(e) => onChangeUsername(e)}
              value={username || ''}
            />
            <input
              id='password'
              type='text'
              className='update-employee-password'
              placeholder='Password'
              onChange={(e) => onChangePassword(e)}
              value={password || ''}
            />
            <input
              id='roleid'
              type='text'
              className='update-employee-roleid'
              placeholder='Role Id'
              onChange={(e) => onChangeRoleId(e)}
              value={roleId || ''}
              readOnly
            />
          </div>
          <div className='update-employee-btn'>
            <button type='submit' className='update-employee-btn-btn'>
              Update Employee
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmployee: bindActionCreators(updateEmployee, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee);
