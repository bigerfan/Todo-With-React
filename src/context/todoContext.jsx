import { createContext, useState } from "react";

export const todoContext = createContext(null)

export const TodoContextProvider = (props)=>{
    const [todos,editTodos] = useState([])
    const [infoForEdit,setInfo] = useState({})
    const [show, setShow] = useState(false);

    

    return(<todoContext.Provider value={{todos,editTodos,infoForEdit,setInfo,show,setShow}}>{props.children}</todoContext.Provider>)

}