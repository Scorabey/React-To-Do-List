import { memo, useContext } from "react"
import { TasksContext } from "../../model/tasksContext"
import ToDoItem from "../toDoItem/ToDoItem"

function ToDoList(props) {
    const { styles } = props

    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)

    const hasTask = tasks.length > 0
    const isemptyFilteredTasks = filteredTasks?.length === 0

    if(!hasTask) {
        return <div className={styles.emptyMessage}>There are no tasks yet</div>
    }

    if(hasTask && isemptyFilteredTasks) {
        return <div className={styles.emptyMessage}>Tasks not found</div>
    }

    return (
        <>
        <ul className={styles.list}>
            {(filteredTasks ?? tasks).map((task) => (
                <ToDoItem 
                    className={styles.item}
                    key={task.id}
                    {...task}    
                />
            ))}
        </ul>
        </>
    )
}

export default memo(ToDoList)