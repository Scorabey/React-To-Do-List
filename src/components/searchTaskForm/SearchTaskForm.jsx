import { useContext } from "react"
import Field from "../field/Field"
import { TasksContext } from "../../context/tasksContext"

export default function SearchTaskForm(props) {
    const { styles } = props

    const {
        searchQuery,
        setSearchQuery,
    } = useContext(TasksContext)

    return (
        <>
        <form 
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
        >
            <Field 
            className={styles.field}
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