import ToDoList from "./ToDoList.jsx";
import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [count, setCount] = useState(0)
  // const [taskName, setTaskName] = useState("");
  // const [tasks, setTasks] = useState([]);
  // const [selectedItem, setSelectedItem] = useState("");

  // function onSave(id) {
  //   let updateTasks = tasks.map((item) => {
  //     if (id == item.id) {
  //       return { ...item, name: selectedItem };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setTasks(updateTasks);
  // }

  return <ToDoList />;
}

export default App;
