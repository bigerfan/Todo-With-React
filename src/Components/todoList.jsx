import React, { useContext } from "react"
import { todoContext } from "../context/todoContext"
import { ShowTodo } from "./showTodo"
import { useEffect } from "react"

export const TodoList = () => {
    const { todos ,editTodos} = useContext(todoContext)

    useEffect(allStorage, [])

    useEffect(saveTodos,[todos])


    function allStorage() {
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }

        console.log(values);

        values.forEach(value=>{
            const todo = JSON.parse(value)
            editTodos(prevtodo=>[...prevtodo,todo])
        })

        console.log(todos);
    }

    function saveTodos(){
        localStorage.clear()
        todos.forEach(todo=>{
            const jsonWork = JSON.stringify(todo)
            localStorage.setItem(todo.work, jsonWork)
        })
    }

    return (<React.Fragment>
        <div className="container">
            <div className="col-12 row ">
                {todos.map((todo) => {
                    return (<ShowTodo todo={todo} />)
                })}
            </div>
        </div>
    </React.Fragment>
    )
}