import React from "react";
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

  console.log(todos, "Todos");

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
      <div
        style={{
          marginTop: "180px",
          width: "80%",
          marginLeft: "140px",
          borderRadius: "3px",
        }}
      >
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            width: "100%",
            justifyContent: "right",
          }}
        >
          <div style={{ marginRight: "300px" }}>
            <select
              style={{
                marginRight: "10px",
                padding: "10px 10px",
                width: "160px",
                border: "1px solid #d8d8d8",
              }}
            >
              <option>Active</option>
              <option>Completed</option>
              <option>Archived</option>
            </select>
            <select
              style={{
                marginRight: "10px",
                padding: "10px",
                width: "150px",
                border: "1px solid #d8d8d8",
              }}
            >
              <option>All Tasks</option>
              <option>My Tasks</option>
            </select>
            <select
              style={{
                marginRight: "10px",
                padding: "10px",
                width: "150px",
                border: "1px solid #d8d8d8",
              }}
            >
              <option>All Projects</option>
            </select>
          </div>
          <div>
            <button
              style={{
                marginRight: "10px",
                padding: "10px",
                width: "180px",
                border: "1px solid #d8d8d8",
                backgroundColor: "#fff",
                color: "black",
              }}
            >
              Add From Template
            </button>
            <button
              style={{
                marginRight: "10px",
                padding: "10px",
                width: "100px",
                border: "none",
                backgroundColor: "#009e79",
                color: "white",
              }}
              disabled={postTodo.loading}
              onClick={addNew}
            >
              New Task
            </button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            marginLeft: "140px",
            marginTop: "50px",
          }}
        >
          <h6 style={{ marginRight: "500px", color: "#878787" }}>TASK</h6>
          <h6 style={{ marginRight: "100px", color: "#878787" }}>PROJECT</h6>
          <h6 style={{ marginRight: "100px", color: "#878787" }}>CLIENT</h6>
          <h6 style={{ marginRight: "100px", color: "#878787" }}>DUE DATE</h6>
        </div>
        <div>
          <TaskList todos={todos} setNewTodo={setNewTodo} />
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
