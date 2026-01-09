import ToDo from "../components/ToDo"
import { TasksProvider } from "../context/tasksContext"

const TasksPage = () => {
    return (
        <TasksProvider>
            <ToDo/>
        </TasksProvider>
    )
}

export default TasksPage