import AddTaskForm from "./addTaskForm/AddTaskForm"
import SearchTaskForm from "./searchTaskForm/SearchTaskForm"
import ToDoInfo from "./toDoInfo/ToDoInfo"
import ToDoList from "./toDoList/ToDoList"

export default function ToDo() {
    const tasks = [
        {id: 'task-1', title: 'Task 1', isDone: false},
        {id: 'task-2', title: 'Task 2', isDone: true}
    ]
    const deleteAllTasks = () => {
        console.log('delete')
    }
    const deleteTask = (taskId) => {
        console.log("Delete: "+ taskId)
    }
    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Task ${taskId} ${isDone ? 'Succes' : 'Decline'}`)
    }
    const filterTask = (query) => {
        console.log(`Search: ${query}`)
    }
    const addTask = () => {
        console.log(`Task added!`)
    }

    return (
        <>
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
            addTask={addTask}
            />
            <SearchTaskForm
            onSearchInput={filterTask}
            />
            <ToDoInfo 
            total={tasks.length} 
            done={tasks.filter(({isDone}) => isDone).length}
            onDeleteAllButtonClick={deleteAllTasks}
            />
            <ToDoList 
            tasks={tasks}
            onDeleteAllButtonClick={deleteTask}
            onTaskcompleteChange={toggleTaskComplete}
            />
        </div>
        </>
    )
}