import { createContext } from "react";
import useTasks from "../hooks/useTasks";
import useInCompleteTaskScroll from "../hooks/useInCompleteTaskScroll";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const { children } = props
    
    const {
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
    } = useTasks()

    const {
        firstInCompleteTaskref,
        firstInCompleteTaskId

    } = useInCompleteTaskScroll(tasks)

    return (
        <TasksContext.Provider
        value={{
            tasks,
            filteredTasks,
            firstInCompleteTaskref,
            firstInCompleteTaskId,
            deleteAllTasks,
            deleteTask,
            toggleTaskComplete,

            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery,
            newTaskInputRef,
            addTask,
        }}
        >
            {children}
        </TasksContext.Provider>
    )
}