import React from 'react';
import { MdEdit, } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';


const List = ({ state, dispatch }) => {

  const markCompleted = (index, completed) => {
    console.log(completed);
    dispatch({ type: 'MARK_COMPLETED', payload: { index, completed } });
  };

  const editTodo = index => {
    dispatch({ type: 'EDIT_TODO', payload: { index } });
  };

  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: { id } });
  };

  const saveTodo = index => {
    dispatch({ type: 'SAVE_TODO', payload: { index } });
  };

  return (
    <div className="todoList">
      <ul>
        {state.todos.map(todo => (
          <li key={`task${todo.index}`}>
            {todo.isEdit ? (
              <>
                <span>Edit : </span>
                <input
                  type="text"
                  className={`editInput${todo.index}`}
                  defaultValue={todo.value}
                  id="editTodo"
                />
                <button id="saveButton" onClick={() => saveTodo(todo.index)}>
                  save
                </button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  onClick={(asd) => markCompleted(todo.index, asd.target.checked)}
                />
                <span className={todo.completed ? 'todoCompleted' : ''}>{todo.value}</span>
                <span className="optionsWrapper">
                  <span className="edit option" onClick={() => editTodo(todo.index)}>
                    <MdEdit />
                  </span>
                  <span className="delete option" onClick={() => deleteTodo(todo.index)}>
                    <RiDeleteBin6Line />
                  </span>
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
