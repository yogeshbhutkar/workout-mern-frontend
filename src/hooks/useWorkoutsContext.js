import { WorkoutsContext } from "../context/WorkoutContexts"
import { useContext } from "react"

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context){
        throw new Error("useWorkoutsContext must be used within a WorkoutsContextProvider")
    }

    return context
}