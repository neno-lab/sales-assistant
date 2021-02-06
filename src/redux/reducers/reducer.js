import { LOGIN } from '../actions/actionTypes';

const initialState = {
  loginProps: {
    username: '',
    password: '',
    roles: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action.payload);
      return {
        ...state,
        loginProps: {
          username: action.payload.username,
          password: action.payload.password,
        },
      };

    default:
      return state;
  }
};

export { reducer };
