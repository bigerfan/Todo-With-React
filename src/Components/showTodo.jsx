import { useContext, useRef } from "react"
import { todoContext } from "../context/todoContext"
import { useEffect } from "react"

export const ShowTodo = ({ todo }) => {

    const { todos, editTodos, setShow, setInfo, infoForEdit } = useContext(todoContext)
    const todoCard = useRef()

    useEffect(() => {
        if (todo.isDone) {
            todoCard.current.classList.add('done')
            todoCard.current.classList.remove('warning')
        }
        else {
            todoCard.current.classList.remove('done')
            const today = new Date
            const deadLine = (new Date(todo.date)).getTime();
            console.log(deadLine - today);
            if (deadLine < today) {
                todoCard.current.classList.add('deadLine')
                todoCard.current.classList.remove('done')
            }
            else if ((deadLine - today) < 100000000) {
                todoCard.current.classList.add('warning')
            }
            else {
                todoCard.current.classList.remove('deadLine')
                todoCard.current.classList.remove('warning')
            }
        }

    }, [todos])


    function doneHandle() {
        const newTodo = todos.map(works => {
            if (works.work == todo.work)
                works.isDone = !works.isDone
            return works
        })
        editTodos([...newTodo])
        console.log(todos);
    }

    function deleteHandle() {
        todoCard.current.classList.add('fadeOut');
        setTimeout(()=>
            editTodos([...todos.filter(works =>
                works.work !== todo.work
            )]),1000
        )

        console.log(todos);
    }

    function editHandle() {
        setShow(true)
        setInfo(todo)
        console.log(infoForEdit);

    }



    return (
        <div className="col-md-6 p-2 zoomIn" >
            <div className="rounded position-relative h-100 todo-Card" ref={todoCard} >
                <div className="row p-3">
                    <h2 className="col-8 center text-center">{todo.name}</h2>
                    <div className="col-4 inline text-center">
                        <h4 className="">DeadLine: </h4>
                        <h4 className="">{todo.date}</h4>
                    </div>
                </div>
                <div className=" p-3 mb-5 col-12 todoText">
                    <h4 className="col-10  m-auto">{todo.work}</h4>
                </div>
                <div className="position-absolute options">
                    <button className="btn btn-success" onClick={doneHandle}>Done</button>
                    <button className="btn btn-danger" onClick={deleteHandle}>Delete</button>
                    <button className="btn btn-warning" onClick={editHandle}>Edit</button>
                </div>
            </div>
        </div>
    )

}