import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'

export default function WorkoutForm() {

    const { dispatch } = useWorkoutContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workout = {title, load, reps}
        const response = await fetch('/api/workouts', {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()
        if (!response.ok){
            setError(response.error)
        }
        if (response.ok){
            dispatch({type: 'CREATE_WORKOUT', payload: json})
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log("new workout added", json)
        }
    }

  return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>
        
        <label>exercise title: </label>
        <input 
            type="text"
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
            required
        />

        <label>Load (in Kg): </label>
        <input 
            type="number"
            onChange={(e)=>{setLoad(e.target.value)}}
            value={load}
            required
        />

        <label>Reps: </label>
        <input 
            type="number"
            onChange={(e)=>{setReps(e.target.value)}}
            value={reps}
            required
        />

        <button>Add workout</button>

        {
            error && 
            (
                <div>
                    error
                </div>
            )
        }

    </form>
  )
}
