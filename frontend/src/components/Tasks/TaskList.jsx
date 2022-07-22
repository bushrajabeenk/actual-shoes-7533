import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ data, setNewTodo }) => {
  return (
    <div>
      {data.map((d) => {
        return <TaskItem key={d.id} {...d} setNewTodo={setNewTodo} />;
      })}
    </div>
  );
};

export default TaskList;
