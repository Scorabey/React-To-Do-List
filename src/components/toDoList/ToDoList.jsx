import ToDoItem from "../toDoItem/ToDoItem"
import { memo } from "react"

function ToDoList(props) {
    const {
        tasks=[],
        filteredTasks,
        onDeleteAllButtonClick,
        onTaskcompleteChange,
        firstInCompleteTaskId,
        firstInCompleteTaskref,
    } = props

    const hasTask = tasks.length > 0
    const isemptyFilteredTasks = filteredTasks?.length === 0

    if(!hasTask) {
        return <div className="todo__empty-message">There are no tasks yet</div>
    }

    if(hasTask && isemptyFilteredTasks) {
        return <div className="todo__empty-message">Tasks not found</div>
    }

    return (
        <>
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <ToDoItem 
                    className="todo__item"
                    key={task.id}
                    ref={task.id === firstInCompleteTaskId ? firstInCompleteTaskref : null}
                    onDeleteAllButtonClick={onDeleteAllButtonClick}
                    onTaskcompleteChange={onTaskcompleteChange}
                    {...task}    
                />
            ))}
        </ul>
        </>
    )
}

export default memo(ToDoList)