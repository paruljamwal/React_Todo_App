import React, { useState } from 'react'
import "./Todo.css"
const TodoItem = ({todo,onDelete}) => {
    const [isCompleted,setIsCompleted]=useState(todo.isCompleted)
  return (
    <div key={todo.id} style={{ display: "flex", marginLeft: "40%", cursor: "pointer" }}>
    <input  type="checkbox" checked={isCompleted} onChange={(e)=>{
        setIsCompleted(e.target.checked)
        //console.log(e.target.checked)
        }}></input>
    <div className={isCompleted ? "striked" : ""}>{todo.value}</div>
    <button onClick={()=>onDelete(todo.id)}>Delete</button>
    {/* for delete first we have to tel parent to remove this value */}
    {/* todo is a child component  if we want to send info child to parent then it go by a function*/}
</div>
  )
}

export default TodoItem