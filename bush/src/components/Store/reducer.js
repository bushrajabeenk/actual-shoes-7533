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
} from "./types";

const initState = {
  getTodos: {
    loading: false,
    success: false,
    error: false,
  },
  postTodo: {
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
    case POST_TODOS_LOADING: {
      return {
        ...state,
        postTodo: {
          ...state.postTodo,
          loading: true,
          success: false,
          error: false,
        },
      };
    }
    case POST_TODOS_SUCCESS: {
      return {
        ...state,
        postTodo: {
          ...state.postTodo,
          loading: false,
          success: true,
          error: false,
        },
        todos: [...state.todos, payload],
      };
    }
    case POST_TODOS_ERROR: {
      return {
        ...state,
        postTodo: {
          ...state.postTodo,
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
    case DELETE_TODOS_LOADING: {
      return {
        ...state,
      };
    }
    case DELETE_TODOS_SUCCESS: {
      return {
        ...state,
        todos: [],
      };
    }
    case DELETE_TODOS_ERROR: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
