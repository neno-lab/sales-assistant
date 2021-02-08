import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/actions';
import './HiUserName.scss';

const HiUserName = ({ loginProps, logout }) => {
  let history = useHistory();

  const handleOnClick = (e) => {
    e.preventDefault();
    logout();
    history.push('/');
  };

  return (
    <>
      <h2 className='hi'>Hi, {loginProps.username}!</h2>
      <i className='fas fa-sign-out-alt' onClick={handleOnClick}></i>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: bindActionCreators(logout, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HiUserName);
