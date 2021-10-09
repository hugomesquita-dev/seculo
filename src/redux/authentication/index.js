import * as type from './types';

const initialState = {
  loading: false,
  authenticated: false,
  user: {},
  students: [],
  student: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.AUTH_LOGIN_LOADING:
      return state;

    case type.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        user: action.payload,
      };

    case type.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        authenticated: false,
        user: {},
      };

    case type.AUTH_SET_STUDENTS:
      return {
        ...state,
        students: action.payload,
      };

    case type.AUTH_SET_STUDENT:
      return {
        ...state,
        student: action.payload,
      };

    default:
      return state;
  }
};
