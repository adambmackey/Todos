import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [lists, setLists] = useState([]);
 const [newListTitle, setNewListTitle] = useState('')

const addNewList = () => {
  let newList = {id: uuidv4(), title: newListTitle, userId: 1}
  setLists([...lists, newList])

}


  return (
    <div>
      <div className="mainCard">
        <div className="newListForm">
          <input value={newListTitle} onChange={(e) => setNewListTitle(e.target.value)} type="text"  />
          <button onClick={addNewList}>Add List</button>
        </div>
        <div className="listDisplay">
          {lists.map((list) => {
            return (
            <Link to={`/list/${list.id}`} key={list.id}><p>{list.title}</p></Link> 
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
