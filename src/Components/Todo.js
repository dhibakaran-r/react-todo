import { useState } from "react";
import "../css/App.css";
import GetTodo from "./GetTodo";
import Time from "./Time";
import Listtodo from "./Listtodo";
import StatusTodo from "./StatusTodo";

function Todo() {
  const [todo, setTodo] = useState([]);

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
          <GetTodo setTodo={setTodo} />
        </div>
        <div className="block-content count-block">
          <StatusTodo todo={todo} />
        </div>
        <div className="block-content block-content-2">
          <Listtodo todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </section>
  );
}

export default Todo;
