import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAPI, postTodoAPI } from "../Store/actions";
import TaskList from "./TaskList";

const TaskComponent = () => {
  const [newTodo, setNewTodo] = useState({});

  const dispatch = useDispatch();

  const { getTodos, postTodo, updateTodos, deleteTodo, todos } = useSelector(
    (state) => state.todo
  );

  const addNew = () => {
    dispatch(
      postTodoAPI({
        title: newTodo,
        status: false,
      })
    );
  };

  useEffect(() => {
    dispatch(getTodosAPI());
  }, []);

  if (getTodos.loading) return <h1>Loading...</h1>;
  else if (getTodos.error) return <h1>Something went wrong</h1>;
  return (
    <div>
      <div>
        <select>
          <option>Active</option>
          <option>Completed</option>
          <option>Archived</option>
        </select>
        <select>
          <option>All Tasks</option>
          <option>My Tasks</option>
        </select>
        <select>
          <option>All Projects</option>
        </select>
      </div>
      <div>
        <button>Add From Template</button>
        <button disabled={postTodo.loading} onClick={addNew}>
          NEW TASK
        </button>
      </div>
      <div>
        <TaskList todos={todos} setNewTodo={setNewTodo} />
      </div>
    </div>
  );
};

export default TaskComponent;
