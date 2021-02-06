import { LOGIN } from './actionTypes';

export const login = (login) => {
  console.log(login);
  return {
    type: LOGIN,
    payload: login,
  };
};
