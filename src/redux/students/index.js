import * as type from './types';

const initialState = {
  loading: false,
  authenticated: false,
  student: {},
  students: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case type.STUDENT_LOGIN_LOADING:
      return state;

    case type.STUDENT_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        students: action.payload,
      };

    case type.STUDENT_LOGIN_FAILURE:
      return {
        ...state,
      };

    case type.STUDENT_SELECT_SUCCESS:
      return {
        ...state,
        loading: false,
        student: action.payload,
      };

    default:
      return state;
  }
};
