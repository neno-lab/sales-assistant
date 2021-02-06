import React, { useState } from 'react';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import './LogRegBtns.scss';

const LogRegBtns = () => {
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
      <button className='registration' onClick={onClickRegistration}>
        REGISTRATION
      </button>
      <button className='login' onClick={onClickLogin}>
        LOG IN
      </button>
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

export default LogRegBtns;
