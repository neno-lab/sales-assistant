import React, { useState } from 'react';
import './AddUser.scss';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // login({ username: username, password: password });
    console.log('tu sam');
    setUsername('');
    setPassword('');
    // onClose();
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='add-user-container'>
      <form className='add-user-form' onSubmit={handleSubmit}>
        <div className='add-user-card'>
          <div className='add-user-title-exit'>
            <h2 className='add-user-title'>Add User</h2>
            <div className='add-user-exit'></div>
          </div>
          <div className='add-user-input-holders'>
            <input
              type='text'
              className='add-user-username'
              placeholder='Username'
              onChange={onChangeUsername}
              value={username}
            />
            <input
              type='password'
              className='add-user-password'
              placeholder='Password'
              onChange={onChangePassword}
              value={password}
            />
          </div>
          <div className='add-user-btn'>
            <button type='submit' className='add-user-btn-btn'>
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
