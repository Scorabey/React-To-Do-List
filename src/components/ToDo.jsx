import { useContext } from "react"
import AddTaskForm from "./addTaskForm/AddTaskForm"
import SearchTaskForm from "./searchTaskForm/SearchTaskForm"
import ToDoInfo from "./toDoInfo/ToDoInfo"
import ToDoList from "./toDoList/ToDoList"
import Button from "./buttons/add/button"
import { TasksContext } from "../context/tasksContext"

export default function ToDo() {

    const { firstInCompleteTaskref } = useContext(TasksContext)

    return (
            <>
            <div className="todo">
                <h1 className="todo__title">To Do List</h1>
                <AddTaskForm/>
                <SearchTaskForm/>
                <ToDoInfo/>
                <Button 
                onClick={() => firstInCompleteTaskref.current?.scrollIntoView({ behavior: 'smooth' })} 
                >
                    Show first incomplete task
                </Button>
                <ToDoList/>
            </div>
            </>
    )
}