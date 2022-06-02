import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");

  const addNewList = () => {
    let newList = { id: uuidv4(), title: newListTitle, userId: 1 };
    setLists([...lists, newList]);
    setNewListTitle("");
  };

  const removeList = (listId) => {
    let updatedLists = lists.filter((item) => {
      return item.id !== listId;
    });
    setLists(updatedLists);
  };

  return (
    <div>
      <div className="mainCard">
        <div className="newListForm">
          <input
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
            type="text"
          />
          <button onClick={addNewList}>Add List</button>
        </div>
        <div className="listDisplay">
          {lists.map((list) => {
            return (
              <p key={list.id}>
                <Link to={`/list/${list.id}`}>{list.title}</Link>
                <button>Edit</button>
                <button onClick={() => removeList(list.id)}>Delete</button>{" "}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
