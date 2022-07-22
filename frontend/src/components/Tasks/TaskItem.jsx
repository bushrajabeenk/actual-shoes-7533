import React from "react";

const TaskItem = ({ setNewTodo }) => {
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
          <option>Delete Task</option>
        </select>
      </div>
    </div>
  );
};

export default TaskItem;
