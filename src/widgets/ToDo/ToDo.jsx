import { TasksContext, ToDoList } from "@/entities/todo"
import AddTaskForm from "@/features/add-task"
import SearchTaskForm from "@/features/search-task"
import ToDoInfo from "@/features/stats"
import Button from "@/shared/components/buttons"
import { useContext } from "react"
import styles from './ToDo.Module.scss'

export default function ToDo() {

    const { firstInCompleteTaskref } = useContext(TasksContext)

    return (
            <>
            <div className={styles.todo}>
                <h1 className={styles.title}>To Do List</h1>
                <AddTaskForm 
                styles={styles}
                />
                <SearchTaskForm 
                styles={styles}
                />
                <ToDoInfo 
                styles={styles}
                />
                <Button 
                onClick={() => firstInCompleteTaskref.current?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Show first incomplete task
                </Button>
                <ToDoList 
                styles={styles}
                />
            </div>
            </>
    )
}