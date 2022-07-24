import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAPI } from "../Store/actions";

const TaskItem = ({ d, setNewTodo }) => {
  const dispatch = useDispatch();

  const { deleteTodo, todos } = useSelector((state) => state.todo);

  const handleDelete = () => {
    dispatch(deleteTodoAPI(d.id));
  };

  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: "80%",
          height: "50px",
          border: "1px solid black",
        }}
      >
        <input
          style={{
            border: "none",
          }}
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <select>
          <option>Mark Complete</option>
          <option>Archive Task</option>
          <option onClick={handleDelete}>Delete Task</option>
        </select>
      </div>
    </div>
  );
};

export default TaskItem;
