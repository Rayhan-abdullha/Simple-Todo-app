import React from "react";
import { useState } from "react";
import classes from "../components/create.module.css";

export default function CreateTodo({ getTask }) {
  const [task, setTask] = useState("");
  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const handlekeyDown = (e) => {
    if (task) {
      if (e.key === "Enter" && task) {
        getTask(task);
        setTask("");
      }
    }
    if(e.key === "Enter" && !task) {
      alert("Invalid")
    }
  };

  const handleOnClick = () => {
    if (task) {
      getTask(task);
      setTask("");
    } else {
      alert("Invalid!")
    }
  };

  return (
    <div className="createToDo pt-5">
      <input
        className={classes.createTodo}
        onKeyDown={handlekeyDown}
        onChange={handleOnChange}
        type="text"
        placeholder="Create a new todo"
        value={task}
      />
      <button
        onClick={handleOnClick}
        onKeyDown={handlekeyDown}
        className="btn1 w-100"
        type="submit"
      >
        Add toDo
      </button>
    </div>
  );
}
