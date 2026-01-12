import { createContext } from "react";
import useInCompleteTaskScroll from "./useInCompleteTaskScroll";
import useTasks from "./useTasks";

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
        disapearingTaskId,
        apearingTaskId,
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
            disapearingTaskId,
            apearingTaskId,
        }}
        >
            {children}
        </TasksContext.Provider>
    )
}