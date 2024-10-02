import React from "react";
import "../css/App.css";

export default function StatusTodo({ todo }) {
  return (
    <div className="todocount">
      <span className="counts">
        <span>No.Of.Todos</span>
        <span>{todo.length}</span>
      </span>
      <span className="counts">
        <span>Completed Todos</span>
        <span>{todo.filter((todo) => todo.completeTodo).length}</span>
      </span>
      <span className="counts">
        <span>Incompleted Todos</span>{" "}
        <span>{todo.filter((todo) => todo.completeTodo === false).length}</span>
      </span>
    </div>
  );
}
