import React, { useReducer } from "react";
import "./App.css";
import GetTodoreducer from "./GetTodoreducer";
import ListTodoreducer from "./ListTodoreducer";

const todolists = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "MARK_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.index === action.payload.index
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.index === action.payload.index ? { ...todo, isEdit: true } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.index !== action.payload.id),
      };
    case "SAVE_TODO":
      const updatedValue = document.querySelector(
        `.editInput${action.payload.index}`
      ).value;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.index === action.payload.index
            ? { ...todo, isEdit: false, value: updatedValue }
            : todo
        ),
      };
    default:
      return state;
  }
};

const Appreducer = () => {
  const [state, dispatch] = useReducer(todolists, { todos: [] });
  function addTodo() {
    const value = document.getElementById("todoInput").value;
    dispatch({
      type: "ADD_TODO",
      payload: {
        value,
        editTodo: false,
        completeTodo: false,
        index:
          Math.floor(Math.random() * 10) + "-" + Math.floor(Math.random() * 10),
      },
    });
  }
  return (
    <section className="container">
      <div className="common-datas">
        <Time />
      </div>

      <div className="block-container">
        <div className="head">
          <h1>TO-DO</h1>
          <h4>Task list</h4>
        </div>
        <div className="block-content block-content-1">
          <GetTodoreducer setTodo={setTodo} />
        </div>
        <div className="block-content count-block">
          <li className="todocount">
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
              <span>
                {todo.filter((todo) => todo.completeTodo === false).length}
              </span>
            </span>
          </li>
        </div>
        <div className="block-content block-content-2">
          <ListTodoreducer todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </section>
  );
};
export default Appreducer;
