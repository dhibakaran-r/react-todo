import { useState } from "react";
// import "./todo.css";
import GetInput from "./GetInput";
import List from "./List";

function Train() {
  const [todos, setTodos] = useState([]);

  return (
    <div id="container">
      <div id="header"></div>
      <GetInput setTodos={setTodos} />
      <div>
        {console.log("starting", todos)}
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default Train;
