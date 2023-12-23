import React from "react";
import "../Todo/Todo.css";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const TodoCards = ({ title, body, id, delId, display }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">{body.split("", 77)}...</p>
      </div>
      <div className="d-flex justify-content-between ">
        <div className="d-flex justify-content-center card-icon-head align-items-center" onClick={() => display("block")}>
          <MdDeleteOutline
            className="card-icon"
          />
          Update
        </div>
        <div
          className="d-flex justify-content-center card-icon-head align-items-center text-danger"
          onClick={() => {
            delId(id);
          }}
        >
          <FaRegEdit className="card-icon del text-danger" />
          delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
