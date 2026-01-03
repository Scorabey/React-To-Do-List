import { useContext } from "react"
import Field from "../field/Field"
import { TasksContext } from "../../context/tasksContext"

export default function SearchTaskForm() {
    const {
        searchQuery,
        setSearchQuery,
    } = useContext(TasksContext)

    return (
        <>
        <form 
        className="todo__form"
        onSubmit={(event) => event.preventDefault()}
        >
            <Field 
            className="todo__field" 
            label="Search task" 
            id="search-task" 
            type="search" 
            value={searchQuery}
            onInput={(event) => setSearchQuery(event.target.value)}
            />
        </form>
        </>
    )
}