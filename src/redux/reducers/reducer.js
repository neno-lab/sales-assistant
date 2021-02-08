import {
  GET_ALL_CUSTOMERS,
  GET_ALL_EMPLOYEES,
  GET_ALL_HATCHBACKS,
  GET_ALL_SEDANS,
  GET_ALL_SUVS,
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
  hatchbacksList: [],
  sedansList: [],
  suvsList: [],
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
      console.log('reducer: ', action.payload);
      return {
        ...state,
        employeesList: action.payload,
      };

    case GET_ALL_HATCHBACKS:
      return {
        ...state,
        hatchbacksList: action.payload,
      };

    case GET_ALL_SEDANS:
      return {
        ...state,
        sedansList: action.payload,
      };

    case GET_ALL_SUVS:
      return {
        ...state,
        suvsList: action.payload,
      };

    default:
      return state;
  }
};

export { reducer };
