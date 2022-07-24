import axios from "axios";
import {
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  POST_TODOS_LOADING,
  POST_TODOS_SUCCESS,
  POST_TODOS_ERROR,
  UPDATE_TODOS_LOADING,
  UPDATE_TODOS_SUCCESS,
  UPDATE_TODOS_ERROR,
  DELETE_TODOS_LOADING,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_ERROR,
  TOGGLE_TODOS,
} from "./types";

export const getTodosAPI = () => (dispatch) => {
  dispatch({ type: GET_TODOS_LOADING });
  axios
    .get("https://bonsai15.herokuapp.com/tasks")
    .then((r) => {
      dispatch({ type: GET_TODOS_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: GET_TODOS_ERROR, payload: err });
    });
};

export const postTodoAPI = (payload) => (dispatch) => {
  dispatch({ type: POST_TODOS_LOADING });
  axios
    .post("https://bonsai15.herokuapp.com/tasks", payload)
    .then((r) => {
      dispatch({ type: POST_TODOS_SUCCESS, payload: r.data });
      dispatch({ type: GET_TODOS_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: POST_TODOS_ERROR, payload: err });
    });
};

export const updateTodoAPI = (payload) => (dispatch) => {
  dispatch({ type: UPDATE_TODOS_LOADING });
  axios
    .patch(`https://bonsai15.herokuapp.com/tasks/${payload.id}`, payload)
    .then((r) => {
      dispatch({ type: UPDATE_TODOS_SUCCESS, payload: r.data });
      dispatch({ type: GET_TODOS_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_TODOS_ERROR, payload: err });
    });
};

export const deleteTodoAPI = (payload) => (dispatch) => {
  dispatch({ type: DELETE_TODOS_LOADING });
  axios
    .delete(`https://bonsai15.herokuapp.com/tasks/${payload.id}`)
    .then((r) => {
      dispatch({ type: DELETE_TODOS_SUCCESS, payload: r.data });
      dispatch({ type: GET_TODOS_SUCCESS, payload: r.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_TODOS_ERROR, payload: err });
    });
};

// export const toggleTodoAPI = (payload) => (dispatch) => {
//   axios
// }