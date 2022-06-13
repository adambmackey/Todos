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
    <div className="listItem">
    <div className="listItemTop">
      
        <Link to={`/list/${list.id}`}>{list.title}</Link>
        <div>
        <button className="btn" onClick={() => setShowEdit(!showEdit)}>{showEdit ? "Cancel" : "Edit"}</button>
        <button className="btn" onClick={() => removeList(list.id)}>Delete</button>{" "}
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

export default ListItem;