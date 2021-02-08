import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/actions';
import './Login.scss';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { useHistory } from 'react-router-dom';

const Login = ({ open, onClose, login, loginProps }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
  // let history=history();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   login({ username: username, password: password });
  //   console.log('tu sam');
  //   setUsername('');
  //   setPassword('');
  //   onClose();
  // };

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
      login(response.data);
      console.log(response);

      console.log('mjau', loginProps);

      if (response.data.roles === 'Admin') {
        history.push('/admin');
      } else if (response.data.roles === 'Employee') {
        history.push('/employee');
      } else {
        history.push('/');
      }
    } catch (err) {
      console.error(err.message);
    }

    // console.log(username);
    // console.log(password);
  };

  console.log('loginProps: ', loginProps.username);

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

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
