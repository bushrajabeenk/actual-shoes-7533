import React from "react";

const TaskItem = ({ setNewTodo }) => {
  return (
    <div>
      <input
        style={{
          margin: "auto",
          width: "80%",
          height: "50px",
          border: "1px solid black",
        }}
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </div>
  );
};

export default TaskItem;
