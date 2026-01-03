import Field from "../field/Field"
import Button from "../buttons/add/button"
import { useContext } from "react"
import { TasksContext } from "../../context/tasksContext"

export default function AddTaskForm() {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = useContext(TasksContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <>
        <form className="todo__form" onSubmit={onSubmit}>
            <Field 
            className="todo__field" 
            label="New task title" 
            id="new-task" 
            value={newTaskTitle}
            onInput={(event) => setNewTaskTitle(event.target.value)}
            ref={newTaskInputRef}
            />
            <Button type="submit">Add</Button>
        </form>
        </>
    )
}