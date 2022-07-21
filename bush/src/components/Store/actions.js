import axios from "axios";
import { GET_TODOS_LOADING, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "./types";

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
