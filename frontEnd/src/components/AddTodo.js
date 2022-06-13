import React, { useState } from 'react'


const AddTodo = ({addNewTask}) => {
  
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewTask(task)
    setTask('')
  }


  return (
    <div>
      <form onSubmit={handleSubmit} > 
      <div>
          <label>Add Todo Item</label>
          <input value={task} onChange={(e) => setTask(e.target.value)} type="text"/>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo