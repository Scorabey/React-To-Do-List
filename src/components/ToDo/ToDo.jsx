import { useContext } from "react"
import AddTaskForm from "../addTaskForm/AddTaskForm"
import SearchTaskForm from "../searchTaskForm/SearchTaskForm"
import ToDoInfo from "../toDoInfo/ToDoInfo"
import ToDoList from "../toDoList/ToDoList"
import Button from "../buttons/add/button"
import { TasksContext } from "../../context/tasksContext"
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