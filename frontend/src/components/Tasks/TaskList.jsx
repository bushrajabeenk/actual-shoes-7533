import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ data }) => {
  return (
    <div>
      {data.map((d) => {
        return <TaskItem key={data.id} {...data} />;
      })}
    </div>
  );
};

export default TaskList;
