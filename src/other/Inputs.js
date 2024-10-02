import React from "react";

function Inputs() {
  const addButton = useRef("");

  function addTodo() {}

  return (
    <div>
      <input type="text" placeholder="give a todo" />
      <button ref={addButton} onClick={addTodo}>
        Add
      </button>
    </div>
  );
}

export default Inputs;
