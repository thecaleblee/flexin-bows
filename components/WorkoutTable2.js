import WorkoutTableHeader2 from './WorkoutTableHeader2'
import Table from './Table'
import Link from 'next/link'

const WorkoutTable2 = (props) => {
  console.log(props)
  let activeTab = props.activeTab
  
  return (
    <div className={`workout-table`}>
      <WorkoutTableHeader2 plans={props.plans} onWorkoutClick={props.onWorkoutClick} />
      <style jsx>{`
         table {
           border-collapse: collapse;
           text-align: left;
           width: 100%;
         }
         
         td, th {
           padding: .5rem 1rem;
           border-right: 1px solid black;
           border-bottom: 1px solid black;
         }
         
         th {
           border-bottom-width: 2px;
         }
         
         th:last-child,
         td:last-child {
           border-right: none;
         }
         
         .workout-table {
           border: 1px solid black;
           border-bottom: none;
         }
         
         .hidden {
           display: none;
         }
      `}</style>
      {props.plans.days.map( (day) => (
        <table key={day.id} className={day.id !== props.activeTab ? 'hidden' : 'active' }>
          <thead>
            <tr>
              <th>Body Part</th>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Reps</th>
            </tr>
          </thead>
          <tbody>
            {day.bodyParts.map( (part) => (
              <tr key={part.name}>
                <td>{part.name}</td>
                <td>
                  {part.exercises.map( (workout) => (
                    <p key={workout.name}>
                      <Link href={`#`}>
                        <a>{workout.name}</a>
                      </Link>
                    </p>
                  ))}
                </td>
                <td>{part.sets}</td>
                <td>{part.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  )
}

export default WorkoutTable2