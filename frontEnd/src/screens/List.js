import React, { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import { useParams } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const List = () => {
  const params = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //fetch tasks from the database using the list id from the params and set into state
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/tasks/${params.id}`
        );
        setTasks(response.data);
      } catch (err) {
        console.log("lists line 17", err);
      }
    };
  }, []);

  const addNewTask = async (task) => {
    let newObj = { id: uuidv4(), task_item: task, completed: false };
    setTasks([...tasks, newObj]);

    // const newObj = { task_item: task, completed: false };
    // try {
    //     const response = await axios.post(`http://localhost:5000/api/tasks`, newObj)
    //     console.log('got back post request line 32 in lists', response.data)
    // } catch (err) {
    //   console.log("lists line 35", err);
    // }
  };

  const crossTask = async (taskId) => {
    let updatedTasks = tasks.map((item) => {
      if (item.id === taskId) {
        item.completed = true;
      }
      return item;
    });
    setTasks(updatedTasks);

    // try {
    //     const response = await axios.patch(`http://localhost:5000/api/tasks/${taskId}`)
    //     console.log('got back patch request line 50 in lists', response.data)
    // } catch (err) {
    //   console.log("lists line 50", err);
    // }

  };

  const updateTask = async (taskId, text) => {
    console.log("updateTask", taskId, text);
    let updatedTasks = tasks.map((item) => {
      if (item.id === taskId) {
        item.task_item = text;
      }
      return item;
    });
    setTasks(updatedTasks);

  //   const newObj = { task_item: text};

  //   try {
  //     const response = await axios.put(`http://localhost:5000/api/tasks/${taskId}`, newObj )
  //     console.log('got back put request line 70 in lists', response.data)
  // } catch (err) {
  //   console.log("lists line 70", err);
  // }

  };

  const removeTask = async (taskId) => {
    let updatedTasks = tasks.filter((item) => {
      return item.id !== taskId;
    });
    setTasks(updatedTasks);


  //   try {
  //     const response = await axios.delete(`http://localhost:5000/api/tasks/${taskId}` )
  //     console.log('made delete request line 86 in lists', response.data)
  // } catch (err) {
  //   console.log("lists line 89", err);
  // }

  };

  return (
    <div>
      List
      <AddTodo addNewTask={addNewTask} />
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              crossTask={crossTask}
              removeTask={removeTask}
              updateTask={updateTask}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
