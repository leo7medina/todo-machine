import React from "react";
import './TodoItem.css';
import { CompleteIcon } from "./../commons-icons/CompleteIcon";
import { DeleteIcon } from "./../commons-icons/DeleteIcon";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon></DeleteIcon>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export {TodoItem};