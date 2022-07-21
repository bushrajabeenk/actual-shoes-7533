import { GET_TODOS_LOADING, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from "./types";

const initState = {
  getTodos: {
    loading: false,
    success: false,
    error: false,
  },
  todos: [],
};

export const todosReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          success: true,
          error: false,
        },
      };
    }
    case GET_TODOS_ERROR: {
      return {
        ...state,
        getTodos: {
          ...state.getTodos,
          loading: false,
          success: false,
          error: true,
        },
      };
    }
  }
};
