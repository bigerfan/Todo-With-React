import { useContext, useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { todoContext } from '../context/todoContext';

export function EditModal() {
    const { todos, editTodos, show, setShow, infoForEdit } = useContext(todoContext)
    const handleClose = () => setShow(false);
    const todoName = useRef()
    const todoDate = useRef()
    const todoWork = useRef()

    useEffect(() => {
        if (infoForEdit.name) {
            todoName.current.value = infoForEdit.name
            todoDate.current.value = infoForEdit.date
            todoWork.current.value = infoForEdit.work
        }
    }, [show])

    const handleEdit = () => {
        const Name = todoName.current.value
        const Date = todoDate.current.value
        const Work = todoWork.current.value
        editTodos([...todos.filter(works => 
            works.work !== infoForEdit.work
        ), { name: Name, date: Date, work: Work ,isDone:false}])

        setShow(false)
    }

    return (
        <>
            <Modal show={show} size='lg' centered onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='' >
                        <div className='row '>
                            <div className='col-7 inline'>
                                <label htmlFor="todoName" className='form-label'>todoName:</label>
                                <input type="text" placeholder='Todo Name...' id='todoName' className='form-control inline todo-Input' ref={todoName} />
                            </div>
                            <div className='inline col-5' >
                                <label htmlFor="deadLineInput" className='form-label'>DeadLine:</label>
                                <input type="date" name="deadLine" id="deadLineInput" className='inline form-control todo-Input' ref={todoDate} />
                            </div>
                        </div>
                        <input type="text" placeholder='work you have to do...' className='form-control todo-Input mt-3' ref={todoWork} />

                    </form>
                </Modal.Body>
                <Button className='form-button mt-2' onClick={handleEdit}>
                    Edit
                </Button>
            </Modal>
        </>
    );
}
