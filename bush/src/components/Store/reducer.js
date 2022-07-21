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

const initState = {
  getTodos: {
    loading: false,
    success: false,
    error: false,
  },
  postTodos: {
    loading: false,
    success: false,
    error: false,
  },
  updateTodos: {
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
        todos: payload,
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
    case ADD_TODOS_LOADING: {
      return {
        ...state,
        postTodos: {
          ...state.postTodos,
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case ADD_TODOS_SUCCESS: {
      return {
        ...state,
        postTodos: {
          ...state.postTodos,
          loading: false,
          success: true,
          error: false,
        },
        todos: [...state.todos, payload],
      };
    }
    case ADD_TODOS_ERROR: {
      return {
        ...state,
        postTodos: {
          ...state.postTodos,
          loading: false,
          success: false,
          error: true,
        },
      };
    }
    case UPDATE_TODOS_LOADING: {
      return {
        ...state,
        updateTodos: {
          ...state.updateTodos,
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case UPDATE_TODOS_SUCCESS: {
      return {
        ...state,
        updateTodos: {
          ...state.updateTodos,
          loading: false,
          success: true,
          error: false,
        },
        todos: [...state.todos, payload],
      };
    }
    case UPDATE_TODOS_ERROR: {
      return {
        ...state,
        updateTodos: {
          ...state.updateTodos,
          loading: false,
          success: false,
          error: true,
        },
      };
    }
  }
};
