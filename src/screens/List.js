import React, { useState } from 'react'
import AddTodo from '../components/AddTodo'
import { useParams } from 'react-router-dom'
import ListItem from '../components/ListItem'
import { v4 as uuidv4 } from 'uuid';

const List = () => {
const params = useParams()
const [tasks, setTasks] = useState([])

const addNewTask = (task) => {
  let newObj = {id: uuidv4(), task_item: task, completed: false} 
 setTasks([...tasks, newObj])
}
const crossTask = (taskId) => {
  let updatedTasks = tasks.map(item => {
    if(item.id === taskId) {
      item.completed = true
    }
    return item
    
  })
  setTasks(updatedTasks)
}



  return (
    <div>List
        <AddTodo addNewTask={addNewTask}/>
        <ul>
        {tasks.map(task => {
            return <ListItem 
            key={task.id} 
            task={task} 
            crossTask={crossTask}
            />
        })}
        </ul>
    </div>
  )
}

export default List