import * as actionTypes from './actionTypes';
import http, { menuItemAPI } from '../../services/httpService';

export const createMenuItem = (menuItem, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.START_LOADING,
  });
  http
    .post(menuItemAPI, menuItem)
    .then(() => {
      if (callback) callback();
    })
    .catch(() => {
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Error while creating menu item',
      });
    })
    .finally(() => {
      dispatch({
        type: actionTypes.END_LOADING,
      });
    });
};
