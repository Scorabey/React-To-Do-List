import Field from "../field/Field"
import AddButton from "../buttons/add/button"

export default function AddTaskForm() {
    return (
        <>
        <form className="todo__form">
            <Field />
            <AddButton />
        </form>
        </>
    )
}