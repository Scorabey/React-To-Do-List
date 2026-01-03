import ToDo from "./components/ToDo"
import { TasksProvider } from "./context/tasksContext"

const App = () => {
  return (
    <TasksProvider>
      <ToDo />
    </TasksProvider>
  )
}

export default App
