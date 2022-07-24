import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAPI } from "../Store/actions";
import { BsThreeDots } from "react-icons/bs";

const TaskItem = ({ d, setNewTodo }) => {
  const dispatch = useDispatch();

  const { deleteTodo, todos } = useSelector((state) => state.todo);

  const handleDelete = () => {
    dispatch(deleteTodoAPI(d.id));
  };

  return (
    <div
      style={{
        marginTop: "20px",
        marginLeft: "140px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          width: "110%",
          color: "#878787",
        }}
      >
        <div>
          <input
            type="checkbox"
            style={{
              height: "20px",
              width: "20px",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          />
          <input
            style={{
              border: "none",
            }}
            type="text"
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>

        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "120px" }}>No project</p>
          <p style={{ marginRight: "100px" }}>--</p>
          <p style={{ marginRight: "100px" }}>No due date</p>
        </div>

        <div>
          <select style={{ border: "none", width: "20px" }}>
            {/*  */}
            <h2>
              <option>
                <BsThreeDots />
              </option>
            </h2>
            <option>Mark Complete</option>
            <option>Archive Task</option>
            <option onClick={handleDelete}>Delete Task</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

// style={{
//   margin: "auto",
//   width: "80%",
//   height: "50px",
//   border: "1px solid black",
// }}
