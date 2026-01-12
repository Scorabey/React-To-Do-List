import tasksAPI from "@/shared/API/tasks"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

const useTasks = () => {
    const [tasks, setTasks] = useState([])
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [disapearingTaskId, setDisapearingTaskId] = useState(null)
    const [apearingTaskId, setApearingTaskId] = useState(null)

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
                setDisapearingTaskId(taskId)
                setTimeout(() => {
                    setTasks(
                        tasks.filter((task) => task.id !== taskId)
                    )
                    setDisapearingTaskId(null)
                }, 400)
                
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

        tasksAPI.add(newTask)
        .then((addTask) => {
                setTasks((prevTasks) => [...prevTasks, addTask])
                setNewTaskTitle('')
                setSearchQuery('')
                newTaskInputRef.current.focus()
                setApearingTaskId(addTask.id)
                setTimeout(() => {
                    setApearingTaskId(null)
                }, 400)
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
        disapearingTaskId,  
        apearingTaskId,
    }
}

export default useTasks