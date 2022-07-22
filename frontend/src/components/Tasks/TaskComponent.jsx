import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { getTodosAPI, postTodoAPI } from "../Store/actions";
import TaskList from "./TaskList";

const TaskComponent = () => {
  // const [data, setData] = useState([]);
  const [newTodo, setNewTodo] = useState({});
  const ref = useRef();

  const dispatch = useDispatch();

  const {
    getTodos,
    postTodo,
    updateTodos,
    deleteTodo,
    data: todos,
  } = useSelector((state) => state.todo);

  // const addTodo = (text) => {
  // setData([
  //   ...data,
  //   {
  //     id: data.length + 1,
  //     text: text,
  //   },
  // ]);
  const addTodo = () => {
    //let value = ref.current.value;
    dispatch(
      postTodoAPI({
        value: newTodo,
        status: false,
      })
    );
    //ref.current.value = null;
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
        <button disabled={postTodo.loading} onClick={addTodo()}>
          NEW TASK
        </button>
      </div>
      <div>
        <TaskList data={data} setNewTodo={setNewTodo} />
      </div>
    </div>
  );
};

export default TaskComponent;
