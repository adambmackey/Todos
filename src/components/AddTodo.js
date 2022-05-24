import React, { useState } from 'react'


const AddTodo = () => {
  const [task, setTask] = useState('')

  return (
    <div>AddTodo
      <form> 
      <div>
          <label>Add Todo Item</label>
          <input value={task} onChange={(e)=> setTask(e.target.value)} type="text"/>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo