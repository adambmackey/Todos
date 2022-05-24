import React from 'react'

const ListItem = ({task}) => {
  return (
    <li key={task.id} >{task.task_item}</li>
  )
}

export default ListItem