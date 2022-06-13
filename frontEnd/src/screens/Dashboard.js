import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import axios from "axios";

const Dashboard = () => {
  const [lists, setLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");

  useEffect(() => {
    //fetch lists from the database and set into state

    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/list/1");
      setLists(response.data);
    } catch (err) {
      console.log("dashboard line 16", err);
    }
  };

  const addNewList = async () => {
    // let newList = { id: uuidv4(), title: newListTitle, userId: 1 };
    // setLists([...lists, newList]);
    // setNewListTitle("");

    const newObj = { title: newListTitle, user_id: 1 };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/list/`,
        newObj
      );
      fetchLists();
      setNewListTitle("");
      console.log("made post request line 36 in lists", response.data);
    } catch (err) {
      console.log("lists line 38", err);
    }
  };

  const removeList = async (listId) => {
    // let updatedLists = lists.filter((item) => {
    //   return item.id !== listId;
    // });
    // setLists(updatedLists);

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/list/${listId}`
      );
      console.log("made delete request line 51 in dashboard", response.data);
      fetchLists();
      setNewListTitle("");
    } catch (err) {
      console.log("lists line 51", err);
    }
  };

  const updateList = async (listId, text) => {
    // let updatedLists = lists.map((item) => {
    //   if (item.id === listId) {
    //     item.title = text;
    //   }
    //   return item;
    // });
    // setLists(updatedLists);

    const newObj = { title: text };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/list/${listId}`,
        newObj
      );
      console.log("got back put request line 70 in dashboard", response.data);
      fetchLists();
    } catch (err) {
      console.log("dashboard line 74", err);
    }
  };

  return (
    <div className="mainCard">
      <div className="cardContent">
        <div className="newListForm">
          <input
            value={newListTitle}
            onChange={(e) => setNewListTitle(e.target.value)}
            type="text"
            placeholder="Enter a list name"
          />
          <button onClick={addNewList}>Add List</button>
        </div>
        <div className="listDisplay">
          {lists.map((list) => {
            return (
              <ListItem
                key={list.id}
                list={list}
                removeList={removeList}
                updateList={updateList}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
