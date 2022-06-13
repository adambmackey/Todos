import React, { useState } from "react";

const TaskItem = ({ task, crossTask, removeTask, updateTask}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [newText, setNewText] = useState(task.task_item)

  const handleEdit = () => {
    updateTask(task.id, newText)
    setShowEdit(false)
  }

  return (
  
      <div key={task.id} className="listItem">
        <div className="listItemTop">
        <span className={task.completed ? "cross-out" : ""}>
          {task.task_item}
        </span >
        <div >
        <button className="btn" onClick={() => crossTask(task.id)}>Done</button>
        <button className="btn" onClick={() => setShowEdit(!showEdit)}>{showEdit ? "Cancel" : "Edit"}</button>
        <button className="btn" onClick={() => removeTask(task.id)}>remove</button>
        </div>
        </div>
     
      { showEdit && (
      <div className="listItemBottom">
        <input onChange={(e) => setNewText(e.target.value)} value={newText} type="text"/>
        <button className="btn" onClick={handleEdit}>submit</button>
      </div>

      )}
       </div>   
  );
};

export default TaskItem;
