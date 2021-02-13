import {
  ADD_CAR,
  ADD_EMPLOYEE,
  DELETE_CAR,
  DELETE_CUSTOMER,
  DELETE_EMPLOYEE,
  GET_ALL_CUSTOMERS,
  GET_ALL_EMPLOYEES,
  GET_CARS,
  LOGIN,
  LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  loginProps: {
    username: '',
    roles: '',
    token: '',
  },
  customersList: [],
  employeesList: [],
  carsList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginProps: {
          username: action.payload.username,
          roles: action.payload.roles,
          token: action.payload.access_token,
        },
      };

    case LOGOUT:
      return {
        ...state,
        loginProps: {
          username: '',
          roles: '',
          token: '',
        },
      };

    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        customersList: action.payload,
      };

    case GET_ALL_EMPLOYEES:
      return {
        ...state,
        employeesList: action.payload,
      };

    case ADD_EMPLOYEE:
      return {
        ...state,
        employeesList: [...state.employeesList, action.payload],
      };

    case DELETE_EMPLOYEE:
      return {
        ...state,
        employeesList: state.employeesList.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case DELETE_CUSTOMER:
      return {
        ...state,
        customersList: state.customersList.filter(
          (customer) => customer.id !== action.payload
        ),
      };

    case GET_CARS:
      // console.log(action.payload);
      return {
        ...state,
        carsList: action.payload,
      };

    case ADD_CAR:
      return {
        ...state,
        carsList: [...state.carsList, action.payload],
      };

    case DELETE_CAR:
      return {
        ...state,
        carsList: state.carsList.filter((car) => car.id !== action.payload),
      };

    default:
      return state;
  }
};

export { reducer };
