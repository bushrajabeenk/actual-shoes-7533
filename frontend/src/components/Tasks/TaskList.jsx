import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ data, setNewTodo }) => {
  return (
    <div>
      {data.map((d) => {
        return <TaskItem key={data.id} {...data} setNewTodo={setNewTodo} />;
      })}
    </div>
  );
};

export default TaskList;
