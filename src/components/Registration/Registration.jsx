import React, { useState } from 'react';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import './Registration.scss';

const Registration = ({ open, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    let register = {
      First_Name: firstName,
      Last_Name: lastName,
      Password: password,
      Username: username,
      Email: email,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await TeamDSalesAssistant.post(
        '/api/account/register',
        register,
        config
      );
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
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

  if (!open) return null;
  return (
    <div className='registration-container'>
      <form className='registration-form' onSubmit={handleSubmit}>
        <div className='registration-card'>
          <div className='registration-title-exit'>
            <h2 className='registration-title'>Register</h2>
            <div className='registration-exit' onClick={onClose}></div>
          </div>
          <div className='registration-input-holders'>
            <input
              type='text'
              className='registration-name'
              placeholder='First Name'
              onChange={onChangeFirstName}
            />
            <input
              type='text'
              className='registration-surname'
              placeholder='Last Name'
              onChange={onChangeLastName}
            />
            <input
              type='email'
              className='registration-email'
              placeholder='Email adress'
              onChange={onChangeEmail}
            />
            <input
              type='text'
              className='registration-username'
              placeholder='Username'
              onChange={onChangeUsername}
            />
            <input
              type='password'
              className='registration-password'
              placeholder='Password'
              onChange={onChangePassword}
            />
          </div>
          <div className='registration-btn'>
            <button className='registration-btn-btn'>Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
