import React from 'react';
import LogRegBtns from '../LogRegBtns/LogRegBtns';
import HiUserName from '../HiUserName/HiUserName';
import { connect } from 'react-redux';
import './Header.scss';

const Header = ({ loginProps }) => {
  return (
    <div className='nav-div'>
      <div className='header-holder'>
        <div className='logo'></div>
        <div className='credentials'>
          {loginProps.username === '' ? <LogRegBtns /> : <HiUserName />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

export default connect(mapStateToProps, null)(Header);
