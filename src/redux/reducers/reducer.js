import {
  ADD_CAR,
  ADD_EMPLOYEE,
  DELETE_CAR,
  DELETE_CUSTOMER,
  DELETE_EMPLOYEE,
  GET_ALL_CUSTOMERS,
  GET_ALL_EMPLOYEES,
  GET_CARD_ID,
  GET_CARS,
  GET_SALES,
  LOGIN,
  LOGOUT,
  UPDATE_CAR,
  UPDATE_EMPLOYEE,
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
  salesList: [],
  cardId: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      return {
        ...state,
        loginProps: {
          username: action.payload.username,
          roles: action.payload.roles.toLowerCase(),
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
          (employee) => employee.User_Id !== action.payload
        ),
      };

    case DELETE_CUSTOMER:
      return {
        ...state,
        customersList: state.customersList.filter(
          (customer) => customer.User_Id !== action.payload
        ),
      };

    case GET_CARS:
      console.log('get cars: ', action.payload);
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
        carsList: state.carsList.filter((car) => car.Car_Id !== action.payload),
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employeesList: state.employeesList.map((employee) =>
          employee.User_Id !== action.payload.User_Id
            ? employee
            : action.payload
        ),
      };

    case UPDATE_CAR:
      return {
        ...state,
        carsList: state.carsList.map((car) =>
          car.Car_Id !== action.payload.Car_Id ? car : action.payload
        ),
      };

    case GET_SALES:
      return {
        ...state,
        salesList: action.payload,
      };

    case GET_CARD_ID:
      return {
        ...state,
        cardId: action.payload,
      };

    default:
      return state;
  }
};

export { reducer };
