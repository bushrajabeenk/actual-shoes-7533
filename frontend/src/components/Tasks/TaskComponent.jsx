import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAPI, postTodoAPI } from "../Store/actions";
import TaskList from "./TaskList";

const TaskComponent = () => {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useDispatch();

  const {
    getTodos,
    postTodo,
    updateTodos,
    deleteTodo,
    todos: data,
  } = useSelector((state) => state.todo);

  const addNew = () => {
    dispatch(
      postTodoAPI({
        title: newTodo,
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
      <div style={{ margin: "auto", width: "80%", display: "flex" }}>
        <div style={{ marginRight: "400px", marginBottom: "30px" }}>
          <select
            style={{ height: "35px", width: "150px", marginRight: "10px" }}
          >
            <option>Active</option>
            <option>Completed</option>
            <option>Archived</option>
          </select>
          <select
            style={{ height: "35px", width: "150px", marginRight: "10px" }}
          >
            <option>All Tasks</option>
            <option>My Tasks</option>
          </select>
          <select
            style={{ height: "35px", width: "150px", marginRight: "10px" }}
          >
            <option>All Projects</option>
          </select>
        </div>
        <div>
          <button
            style={{ height: "35px", width: "150px", marginRight: "10px" }}
          >
            Add From Template
          </button>
          <button
            style={{ height: "35px", width: "120px" }}
            disabled={postTodo.loading}
            onClick={addNew}
          >
            NEW TASK
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <span style={{ marginRight: "500px" }}>TASK</span>
        <span style={{ marginRight: "100px" }}>PROJECT</span>
        <span style={{ marginRight: "100px" }}>CLIENT</span>
        <span style={{ marginRight: "100px" }}>DUE DATE</span>
      </div>

      <div>
        <TaskList data={data} setNewTodo={setNewTodo} />
      </div>
    </div>
  );
};

export default TaskComponent;
