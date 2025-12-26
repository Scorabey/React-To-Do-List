import AddTaskForm from "./addTaskForm/AddTaskForm"
import SearchTaskForm from "./searchTaskForm/SearchTaskForm"
import ToDoInfo from "./toDoInfo/ToDoInfo"
import ToDoList from "./toDoList/ToDoList"

export default function ToDo() {
    return (
        <>
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <ToDoInfo />
            <ToDoList />
        </div>
        </>
    )
}