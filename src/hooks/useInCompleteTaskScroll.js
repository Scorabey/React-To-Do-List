import { useRef } from "react"

const useInCompleteTaskScroll = (tasks) => {
    const firstInCompleteTaskref = useRef(null)
    const firstInCompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

    return {
        firstInCompleteTaskId,
        firstInCompleteTaskref
    }
}

export default useInCompleteTaskScroll