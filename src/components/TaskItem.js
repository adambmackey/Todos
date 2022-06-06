import React, { useState } from "react";

const TaskItem = ({ task, crossTask, removeTask, updateTask}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [newText, setNewText] = useState(task.task_item)

  const handleEdit = () => {
    updateTask(task.id, newText)
    setShowEdit(false)
  }

  return (
    <>
      <li key={task.id}>
        <span className={task.completed ? "cross-out" : ""}>
          {task.task_item}
        </span>
        <button onClick={() => crossTask(task.id)}>Done</button>
        <button onClick={() => setShowEdit(!showEdit)}>{showEdit ? "Cancel" : "Edit"}</button>
        <button onClick={() => removeTask(task.id)}>remove</button>
      </li>
      { showEdit && (
      <div>
        <input onChange={(e) => setNewText(e.target.value)} value={newText} type="text"/>
        <button onClick={handleEdit}>submit</button>
      </div>
      )}   
    </>
  );
};

export default TaskItem;
