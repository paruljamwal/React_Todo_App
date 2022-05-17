import React, { useState } from 'react'
import "./Todo.css";
import {FcFullTrash} from 'react-icons/fc';
import {FcCheckmark} from "react-icons/fc"
const TodoItem = ({todo,onDelete}) => {
    const [isCompleted,setIsCompleted]=useState(todo.isCompleted)
  return (
    <div id='lists' key={todo.id} style={{  marginLeft: "13%", cursor: "pointer" }}>
    <input  type="checkbox" checked={isCompleted} onChange={(e)=>{
        setIsCompleted(e.target.checked)
        //console.log(e.target.checked)
        }}></input><FcCheckmark/>
    <div  className={isCompleted ? "striked" : ""}>{todo.value}</div>
    <button className='del' onClick={()=>onDelete(todo.id)}><FcFullTrash/></button>
    {/* for delete first we have to tel parent to remove this value */}
    {/* todo is a child component  if we want to send info child to parent then it go by a function*/}
</div>
  )
}

export default TodoItem