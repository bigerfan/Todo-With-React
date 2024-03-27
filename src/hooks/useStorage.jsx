import { useContext } from "react"
import { todoContext } from "../context/todoContext"

export const useStorage = () => {
    const { todos } = useContext(todoContext)

    localStorage.clear()

    todos.forEach(work => {
        localStorage.setItem(work.work, work)
    })
}