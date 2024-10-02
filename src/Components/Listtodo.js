import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdMovieEdit } from "react-icons/md";
import { HiClipboardDocumentCheck } from "react-icons/hi2";

export default function Listtodo({ todo, setTodo }) {
  // const changeVal = (event) => {
  //   const value = event.target.value;
  //   setTodo(() => [value]);
  // };

  const changeValue = (index, value) => {
    setTodo(
      todo.map((todo) => {
        if (todo.index === index) {
          return { ...todo, ...value };
        }
        return todo;
      })
    );
  };

  const changeMark = (index, state) => {
    setTodo(
      todo.map((todo) =>
        todo.index === index ? { ...todo, completeTodo: state } : todo
      )
    );
  };

  const editTodo = (index) => {
    changeValue(index, { editTodo: true });
  };

  const saveTodo = (index) => {
    const value = document.querySelector("#todo" + index).value;
    changeValue(index, { editTodo: false, value });
  };

  const deletetodo = (index) => {
    console.log(index);
    setTodo(todo.filter((todo) => "todo" + todo.index !== index));
  };

  //   const deleteAlltodo = () => {
  //     setTodo([]);
  //   };

  return (
    <>
      <ul className="todo-block">
        {todo.map((todo) => {
          if (todo.editTodo) {
            return (
              <li className="todo-items" key={"task" + todo.index}>
                <div className="todo-list-block">
                  <div className="todo-block-1">
                    <span>Edit:</span>
                    <input
                      type="text"
                      id={"todo" + todo.index}
                      className="todolist"
                      defaultValue={todo.value}
                      // onChange={changeVal}
                    />
                  </div>
                  {/* <div className="todo-block-2"> */}
                  <button
                    className="todo-button save-todo"
                    id="save"
                    onClick={() => saveTodo(todo.index)}
                  >
                    <HiClipboardDocumentCheck />
                  </button>
                  {/* </div> */}
                </div>
              </li>
            );
          } else {
            return (
              <li className="todo-items" key={"task" + todo.index}>
                <div className="todo-list-block">
                  <div className="todo-block-1">
                    <input
                      type="checkbox"
                      onClick={(event) =>
                        changeMark(todo.index, event.target.checked)
                      }
                    />
                    <input
                      type="text"
                      id={"todo" + todo.index}
                      className={todo.completeTodo ? "ctodo" : "todolist"}
                      defaultValue={todo.value}
                      // onChange={changeVal}
                      disabled
                    />
                  </div>
                  <div className="todo-block-2">
                    <button
                      onClick={() => editTodo(todo.index)}
                      className="todo-button edit-todo"
                      id="edit"
                    >
                      <MdMovieEdit />
                    </button>

                    <button
                      onClick={() => deletetodo("todo" + todo.index)}
                      className="todo-button delete-todo"
                      id={todo.index}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
      {/* <div className="block-content-3">
        <button
          onClick={() => deleteAlltodo()}
          className="all-delete"
          id="all-delete"
        >
          <span>Delete All tasks</span>
          <span>
            <MdDeleteOutline />
          </span>
        </button>
      </div> */}
    </>
  );
}
