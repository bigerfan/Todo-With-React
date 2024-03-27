import React, { useContext, useRef, useState } from 'react'
import { todoContext } from '../context/todoContext'


export const AddTodo = () => {
    const { todos, editTodos } = useContext(todoContext)
    const [errorText, setError] = useState('')
    const todoName = useRef()
    const todowork = useRef()
    const todoDate = useRef()
    const addButton = useRef()
    function addTodo(e) {
        e.preventDefault()
        const name = todoName.current.value
        const date = todoDate.current.value
        const work = todowork.current.value
        let error = false
        todos.map(works => {
            if (works.work == work) {
                setError('this work already exist')
                error = true
                return
            }
            else {
                setError('')
                return
            }
        })
        if(name == ''||date == ''||work == ''){
            setError('all inputs must be complete')
            error = true
        }
        if (!error) {
            editTodos([...todos, { name: name, date: date, work: work, isDone: false }])
            todoName.current.value = ''
            todoDate.current.value = ''
            todowork.current.value = ''
            formchek()

        }
        console.log(todos);




    }

    function formchek() {
        if (todoDate.current.value !== '' && todowork.current.value !== '' && todoName.current.value !== '')
            addButton.current.disabled = false
        else
            addButton.current.disabled = true
    }
    return (<React.Fragment>
        <div className='container p-3'>
            <h2 className=' m-4'>Write down the things you want to do....</h2>
            {errorText ?
                <div className='alert alert-danger'>
                    <h4 className='text-danger'>{errorText}</h4>
                </div>:''}

            <form className='' onSubmit={addTodo}>
                <div className='row '>
                    <div className='col-7 inline'>
                        <label htmlFor="todoName" className='form-label'>todoName:</label>
                        <input type="text" ref={todoName} onInput={formchek} placeholder='Todo Name...' id='todoName' className='form-control inline todo-Input' />
                    </div>
                    <div className='inline col-5' >
                        <label htmlFor="deadLineInput" className='form-label'>DeadLine:</label>
                        <input type="date" name="deadLine" ref={todoDate} id="deadLineInput" onInput={formchek} className='inline form-control todo-Input' />
                    </div>
                </div>
                <input type="text" ref={todowork} onInput={formchek} placeholder='work you have to do...' className='form-control todo-Input mt-3' />
                <input type="submit" disabled value="Add" ref={addButton} onClick={addTodo} className='btn form-button mt-3' />
            </form>
            <div>{ }</div>
        </div>

    </React.Fragment>)
}