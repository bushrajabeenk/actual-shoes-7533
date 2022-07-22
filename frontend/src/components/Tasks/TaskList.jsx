import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ todos, setNewTodo }) => {
  return (
    <div>
      {todos.map((d) => {
        return <TaskItem key={d.id} {...d} setNewTodo={setNewTodo} />;
      })}
    </div>
  );
};

export default TaskList;
