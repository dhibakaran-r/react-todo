import React from "react";
import { useRef } from "react";
import "../css/App.css";

function GetTodo({ setTodo }) {
  const inputRef = useRef(null);
  const addTodo = () => {
    const todoObj = {};
    const tasks = document.getElementById("todos").value;
    todoObj.value = tasks;
    todoObj.editTodo = false;
    todoObj.completeTodo = false;
    setTodo((preValue) => {
      todoObj.index =
        Math.floor(Math.random() * 10) + "-" + Math.floor(Math.random() * 10);
      // console.log(todoObj);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      return [...preValue, todoObj];
    });
  };

  return (
    <>
      <div className="todo-input">
        <input type="text" ref={inputRef} placeholder="Type todos" id="todos" />
      </div>
      <div className="add-todo">
        <button className="asign-todo" onClick={addTodo}>
          Add
        </button>
      </div>
    </>
  );
}

export default GetTodo;
