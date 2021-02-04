import React, { useState } from 'react';
import './Login.scss';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';

const Login = ({ open, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', 'password');

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    try {
      const response = await TeamDSalesAssistant.post('/login', params, config);
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }

    console.log(username);
    console.log(password);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  if (!open) return null;
  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className='login-card'>
          <div className='login-title-exit'>
            <h2 className='login-title'>Log In</h2>
            <div className='login-exit' onClick={onClose}></div>
          </div>
          <div className='login-input-holders'>
            <input
              type='text'
              className='login-username'
              placeholder='Username'
              onChange={onChangeUsername}
              value={username}
            />
            <input
              type='password'
              className='login-password'
              placeholder='Password'
              onChange={onChangePassword}
              value={password}
            />
          </div>
          <div className='login-btn'>
            <button type='submit' className='login-btn-btn'>
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;