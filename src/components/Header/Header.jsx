import React, { useState } from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import './Header.scss';

const Header = () => {
  // const [token, setToken] = useState();
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegistration, setIsOpenModalRegistration] = useState(false);

  const onClickLogin = (e) => {
    e.preventDefault();
    setIsOpenModalLogin(true);
  };

  const onClickRegistration = (e) => {
    e.preventDefault();
    setIsOpenModalRegistration(true);
  };

  return (
    <>
      <div className='nav-div'>
        <div className='header-holder'>
          <div className='logo'></div>
          <div className='credentials'>
            <button className='registration' onClick={onClickRegistration}>
              REGISTRATION
            </button>
            <button className='login' onClick={onClickLogin}>
              LOG IN
            </button>
          </div>
        </div>
      </div>
      <Login
        open={isOpenModalLogin}
        onClose={() => setIsOpenModalLogin(false)}
      />
      <Registration
        open={isOpenModalRegistration}
        onClose={() => setIsOpenModalRegistration(false)}
      />
    </>
  );
};

export default Header;
