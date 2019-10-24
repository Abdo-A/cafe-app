import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  allMenuItems: [],
  isLoading: false,
  error: '',
  info: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.END_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.SET_MENU_ITEMS:
      return {
        ...state,
        allMenuItems: action.payload,
      };

    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case actionTypes.SET_INFO:
      return {
        ...state,
        info: action.payload,
      };

    default:
      return state;
  }
};
