import React from "react";

function AddTodo(handleChange, handleClick){
  return(
    <>
    <input onChange={handleChange} type="text" placeholder="Todo description"/>
    <button type="button" onClick={handleClick}>Add</button>
    </>
  )
}

export default AddTodo
