import React, { useState } from "react";
import { Link } from 'react-router-dom'

const ListItem = ({list, removeList, updateList}) => {
    const [showEdit, setShowEdit] = useState(false)
    const [newText, setNewText] = useState(list.title)

    const handleEdit = () => {
        updateList(list.id, newText)
        setShowEdit(false)
      }

  return (
    <div>
      <p>
        <Link to={`/list/${list.id}`}>{list.title}</Link>
        <button onClick={() => setShowEdit(!showEdit)}>{showEdit ? "Cancel" : "Edit"}</button>
        <button onClick={() => removeList(list.id)}>Delete</button>{" "}
      </p>
      { showEdit && (
      <div>
        <input onChange={(e) => setNewText(e.target.value)} value={newText} type="text"/>
        <button onClick={handleEdit}>submit</button>
      </div>
      )} 
    </div>
  );
};

export default ListItem;