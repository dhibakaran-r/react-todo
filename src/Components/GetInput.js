import React from 'react'

function GetInput({clickFuntion}) {
  return (
    <div id="inputContainer">
        <div>New Task</div>
        <input id="todoInput" placeholder='give a todo' value="wake up at 5am"/>  
        <button onClick={clickFuntion}>Add</button>      
    </div>
  )
}

export default GetInput
