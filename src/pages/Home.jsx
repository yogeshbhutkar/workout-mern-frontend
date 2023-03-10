import React, { useEffect } from 'react'
import WorkoutDetail from '../components/WorkoutDetail'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'

export default function Home() {

  const { workouts, dispatch } = useWorkoutContext()

  useEffect(()=>{
    const fetchWorkouts = async () => {
      const data = await fetch("/api/workouts")
      const json = await data.json()
      if (data.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    fetchWorkouts()
  }, [dispatch])

  return (
    <div className='home'>
      <div className="workouts">
        {workouts && workouts.map((workout)=>(
          <WorkoutDetail key={workout._id} workout = {workout} />
        ))}
      </div>    
      <WorkoutForm />  
    </div>
  )
}
