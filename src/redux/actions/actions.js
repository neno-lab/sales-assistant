import {
  GET_ALL_EMPLOYEES,
  GET_ALL_CUSTOMERS,
  LOGIN,
  LOGOUT,
  GET_ALL_HATCHBACKS,
  GET_ALL_SEDANS,
  GET_ALL_SUVS,
} from './actionTypes';

export const login = (login) => {
  // console.log(login);
  return {
    type: LOGIN,
    payload: login,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const getAllCustomers = (customers) => {
  return {
    type: GET_ALL_CUSTOMERS,
    payload: customers,
  };
};

export const getAllEmployees = (employees) => {
  console.log('zaposlenici: ', employees);
  return {
    type: GET_ALL_EMPLOYEES,
    payload: employees,
  };
};

export const getAllHatchbacks = (hatchbacks) => {
  return {
    type: GET_ALL_HATCHBACKS,
    payload: hatchbacks,
  };
};

export const getAllSedans = (sedans) => {
  return {
    type: GET_ALL_SEDANS,
    payload: sedans,
  };
};

export const getAllSuvs = (suvs) => {
  return {
    type: GET_ALL_SUVS,
    payload: suvs,
  };
};
