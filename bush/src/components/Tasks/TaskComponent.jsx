import React from "react";
import { useState } from "react";
import TaskList from "./TaskList";

const TaskComponent = () => {
  const [data, setData] = useState([]);

  const addTodo = (text) => {
    setData([
      ...data,
      {
        id: data.length + 1,
        text: text,
      },
    ]);
  };

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
        <button
          onClick={() => {
            addTodo();
          }}
        >
          NEW TASK
        </button>
      </div>
      <div>
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default TaskComponent;
