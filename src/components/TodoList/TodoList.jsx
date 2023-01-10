import React from "react";
import TodoTile from "../TodoTile/TodoTile";

function TodoList({todos}){
  return(
    <div>
      {todos.map(todo => <TodoTile key={todo.id} desc={todo.desc}/>)}
    </div>
  )
}

export default TodoList