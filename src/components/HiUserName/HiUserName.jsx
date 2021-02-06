import React from 'react';
import { connect } from 'react-redux';
import './HiUserName.scss';

const HiUserName = ({ loginProps }) => {
  return <h2 className='hi'>Hi, {loginProps.username}!</h2>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

export default connect(mapStateToProps, null)(HiUserName);
