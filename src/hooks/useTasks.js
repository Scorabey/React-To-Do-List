import { useCallback, useState, useRef, useMemo, useEffect } from "react"
import tasksAPI from "../API/TasksApi"

const useTasks = () => {
    const [tasks, setTasks] = useState([])
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const newTaskInputRef = useRef(null)

    const deleteAllTasks = useCallback(() => {
        const isConfirm = confirm('You want to delete all tasks?')

        if(isConfirm) {
        tasksAPI.deleteAll(tasks).then(() => setTasks([]))
        }
    }, [tasks])
    const deleteTask = useCallback((taskId) => {

        tasksAPI.delete(taskId)
            .then(() => {
                setTasks(
                    tasks.filter((task) => task.id !== taskId)
                )
            })
    }, [tasks])
    const toggleTaskComplete = useCallback((taskId, isDone) => {
        tasksAPI.toggleComplete(taskId, isDone).then(() => {
                setTasks(
                    tasks.map((task) => {
                        if(task.id === taskId) {
                            return { ...task, isDone }
                        } 

                        return task
                    })
            )})
    }, [tasks])
    const addTask = useCallback((title) => {
        const newTask = {
                title,
                isDone: false
        }

        tasksAPI.add(newTask).then((addTask) => {
                setTasks((prevTasks) => [...prevTasks, addTask])
                setNewTaskTitle('')
                setSearchQuery('')
                newTaskInputRef.current.focus()
            })


    }, [])
    useEffect(() => {
        newTaskInputRef.current.focus()

        tasksAPI.getAll(setTasks)
    }, [])

    const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()
    
    return clearSearchQuery.length > 0 
        ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery)) 
        : null}, [tasks, searchQuery])

    return {
        tasks,
        filteredTasks,
        deleteAllTasks,
        deleteTask,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
    }
}

export default useTasks