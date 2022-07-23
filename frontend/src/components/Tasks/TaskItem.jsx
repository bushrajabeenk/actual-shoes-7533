import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAPI } from "../Store/actions";

const TaskItem = ({ d, setNewTodo }) => {
  const dispatch = useDispatch();

  const { deleteTodo } = useSelector((state) => state.todo);

  const handleDelete = () => {
    //console.log(d)
    dispatch(deleteTodoAPI(d.id));
  };

  return (
    <div style={{ paddingBottom: "10px" }}>
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
            float: "left",
          }}
          type="checkbox"
        />
        <input
          style={{
            border: "none",
          }}
          value={d}
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <select style={{ float: "right", border: "none" }}>
          <option>...</option>
          <option>Mark Complete</option>
          <option>Archive Task</option>
          <option onClick={handleDelete}>Delete Task</option>
        </select>
      </div>
    </div>
  );
};

export default TaskItem;
