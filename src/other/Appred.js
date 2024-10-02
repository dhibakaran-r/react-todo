import React, { useReducer } from "react";
import "./App.css";
import GetInput from "./GetInput";
import List from "./List";

const listReducer = (state, action) => {
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

const Appred = () => {
  const [state, dispatch] = useReducer(listReducer, { todos: [] });
  function addTodo() {
    const value = document.getElementById("todoInput").value;
    dispatch({
      type: "ADD_TODO",
      payload: {
        value,
        isEdit: false,
        completed: false,
        index:
          Math.floor(Math.random() * 10) + "-" + Math.floor(Math.random() * 10),
      },
    });
  }
  return (
    <div id="container">
      <div id="header">
        {
          <>
            <div>No Of Todos :{state.todos.length}</div>
            <div>
              No Of completed :
              {state.todos.filter((todo) => todo.completed).length}
            </div>
          </>
        }
      </div>

      {/* Components */}
      <GetInput clickFuntion={addTodo} />
      <List state={state} dispatch={dispatch} />
    </div>
  );
};

export default Appred;
