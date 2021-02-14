import {
  GET_ALL_EMPLOYEES,
  GET_ALL_CUSTOMERS,
  LOGIN,
  LOGOUT,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  DELETE_CUSTOMER,
  GET_CARS,
  ADD_CAR,
  DELETE_CAR,
  UPDATE_EMPLOYEE,
  UPDATE_CAR,
} from './actionTypes';

export const login = (login) => {
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
  return {
    type: GET_ALL_EMPLOYEES,
    payload: employees,
  };
};

export const addEmployee = (employee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: employee,
  };
};

export const deleteEmployee = (id) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id,
  };
};

export const deleteCustomer = (id) => {
  return {
    type: DELETE_CUSTOMER,
    payload: id,
  };
};

export const getCars = (cars) => {
  // console.log(cars);
  return {
    type: GET_CARS,
    payload: cars,
  };
};

export const addCar = (car) => {
  return {
    type: ADD_CAR,
    payload: car,
  };
};

export const deleteCar = (id) => {
  return {
    type: DELETE_CAR,
    payload: id,
  };
};

export const updateEmployee = (employee) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: JSON.parse(employee),
  };
};

export const updateCar = (car) => {
  return {
    type: UPDATE_CAR,
    payload: JSON.parse(car),
  };
};
