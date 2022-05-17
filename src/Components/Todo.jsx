import React, { useState } from 'react'
import styles from "./Todo.css"
import TodoItem from './TodoItem'
const Todo = () => {
    const [todo, setTodo] = useState([]) //input value
    const [value, setValue] = useState("") // list  // when I set new todos my value lost so use this useState
    //delete todo-------------------------------->
    const onDelete = (id) => {
        let newTodo = todo.filter(todo => todo.id !== id)
        setTodo(newTodo)
    }



    return (
        <div>

            {todo.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete}></TodoItem>
            ))}


            <input placeholder='What needs to be done' value={value} onChange={(e) => setValue(e.target.value)}></input>

            {/* <input placeholder='What needs to be done' value={value} onChange={(e) => setValue(e.target.value)}
                onkey press--------------------------------

                onKeyDownCapture={e => {
                    if (e.key === "Enter") {
                        setTodo([...todo, { id: Date.now(), value: value, isCompleted: false }]);
                        setValue("")
                    }
                }}
            ></input> */}


            <button style={{
                marginLeft: "2%", borderRadius: "5px"
            }} onClick={() => {
                setTodo([...todo, { id: Date.now() , value: value , isCompleted: false  }]);
                setValue("")
            }}>ADD</button>




        </div>
    )
}

export default Todo


//primitive ; refrence is updated when value is changes

//a=2
//a=3

//non primitive : refrence is not updated

//a={i:1}

//a.i=2 it still point to same obj


//then javascript don't rerender anthy  so that we can do spreding

// a={...a , i: 2}

//spread create new obj so the refrence is change

// so javascript think a is change so that it will also update DOM