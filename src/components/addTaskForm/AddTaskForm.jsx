import Field from "../field/Field"
import Button from "../buttons/add/button"

export default function AddTaskForm() {
    return (
        <>
        <form className="todo__form">
            <Field className="todo__field" label="New task title" id="new-task" />
            <Button type="submit">Add</Button>
        </form>
        </>
    )
}