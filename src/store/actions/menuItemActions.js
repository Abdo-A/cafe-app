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
      dispatch(setInfo('Successfully created menu item'));
    })
    .catch(() => {
      dispatch(setError('Error while creating menu item'));
    })
    .finally(() => {
      dispatch({
        type: actionTypes.END_LOADING,
      });
    });
};

export const getAllMenuItems = (callback) => (dispatch) => {
  dispatch({
    type: actionTypes.START_LOADING,
  });
  http
    .get(`${menuItemAPI}/all`)
    .then((res) => {
      if (callback) callback();
      dispatch({
        type: actionTypes.SET_MENU_ITEMS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch(setError('Error while getting menu items'));
    })
    .finally(() => {
      dispatch({
        type: actionTypes.END_LOADING,
      });
    });
};

export const deleteMenuItem = (id, callback) => (dispatch) => {
  dispatch({
    type: actionTypes.START_LOADING,
  });
  http
    .delete(`${menuItemAPI}/${id}`)
    .then(() => {
      if (callback) callback();
      dispatch(setInfo('Successfully deleted menu item'));
    })
    .catch(() => {
      dispatch(setError('Error while deleting menu item'));
    })
    .finally(() => {
      dispatch({
        type: actionTypes.END_LOADING,
      });
    });
};

export const setError = (error) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_ERROR,
    payload: error,
  });
};

export const setInfo = (info) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_INFO,
    payload: info,
  });
};
