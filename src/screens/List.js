import React, { useState } from 'react'
import AddTodo from '../components/AddTodo'
import { useParams } from 'react-router-dom'
import ListItem from '../components/ListItem'

const List = () => {
const params = useParams()
const [tasks, setTasks] = useState([{id: 1, task_item: 'Wash the car'},{id: 2, task_item: 'Wash the dog'}])


  return (
    <div>List
        <AddTodo/>
        <ul>
        {tasks.map(task => {
            return <ListItem key={task.id} task={task}/>
        })}
        </ul>
    </div>
  )
}

export default List