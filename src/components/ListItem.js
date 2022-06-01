import React from 'react'

const ListItem = ({task, crossTask}) => {
  return (
    <li key={task.id} >
      <span className={task.completed ? 'cross-out' : '' }>{task.task_item}</span>
      <button onClick={() => crossTask(task.id)}>Done</button>
    </li>

  )
}

export default ListItem