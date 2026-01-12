import { TasksContext } from "@/entities/todo"
import Button from "@/shared/components/buttons"
import Field from "@/shared/components/field"
import { useContext, useState } from "react"

export default function AddTaskForm(props) {
    const { styles } = props

    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = useContext(TasksContext)

    const [error, setError] = useState('')

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    const onSubmit = (event) => {
        event.preventDefault()

        if(!isNewTaskTitleEmpty) {
            addTask(clearNewTaskTitle)
        }
    }

    const onInput = (event) => {
        const {value} = event.target
        const clearValue = value.trim()
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0

        setNewTaskTitle(value)
        setError(hasOnlySpaces ? 'The task cannot be empty' : '')
    }

    return (
        <>
        <form className={styles.form} onSubmit={onSubmit}>
            <Field 
            className={styles.field} 
            label="New task title" 
            id="new-task" 
            error={error}
            value={newTaskTitle}
            onInput={onInput}
            ref={newTaskInputRef}
            />
            <Button 
            type="submit"
            isDisabled={isNewTaskTitleEmpty}
            >
                Add
            </Button>
        </form>
        </>
    )
}