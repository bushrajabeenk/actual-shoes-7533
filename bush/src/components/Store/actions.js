import axios from "axios";
import {
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  ADD_TODOS_LOADING,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_ERROR,
  UPDATE_TODOS_LOADING,
  UPDATE_TODOS_SUCCESS,
  UPDATE_TODOS_ERROR,
} from "./types";

export const getTodosAPI = () => (dispatch) => {
  dispatch({ type: GET_TODOS_LOADING });
  axios
    .get("")
    .then((r) => {
      dispatch({ type: GET_TODOS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: GET_TODOS_ERROR });
    });
};

export const addTodoAPI = (payload) => (dispatch) => {
  dispatch({ type: ADD_TODOS_LOADING });
  axios
    .post("", payload)
    .then((r) => {
      dispatch({ type: ADD_TODOS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: ADD_TODOS_ERROR });
    });
};

export const updateTodoAPI = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_TODOS_LOADING });
  axios
    .post("", payload)
    .then((r) => {
      dispatch({ type: UPDATE_TODOS_SUCCESS, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: UPDATE_TODOS_ERROR });
    });
};
