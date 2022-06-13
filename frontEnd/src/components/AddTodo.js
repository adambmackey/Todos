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
      <div className='newListForm' >
        
          <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder='Add new task'/>
        <button type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo