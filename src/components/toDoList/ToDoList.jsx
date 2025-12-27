import ToDoItem from "../toDoItem/ToDoItem"

export default function ToDoList(props) {
    const {
        tasks,
    } = props

    const hasTask = true

    if(!hasTask) {
        return <div className="todo__empty-message"></div>
    }

    return (
        <>
        <ul className="todo__list">
            {tasks.map((task) => (
                <ToDoItem 
                    className="todo__item"
                    key={task.id}
                    {...task}    
                />
            ))}
        </ul>
        </>
    )
}