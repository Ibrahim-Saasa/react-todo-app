import React, { useState } from "react";
import { GoTrash } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import EditTaskModal from "./editTaskModal";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>ToDo List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          +
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              <GoTrash />
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              <FaArrowUp />
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              <FaArrowDown />
            </button>
          </li>
        ))}
      </ol>

      <div>
        <EditTaskModal
          onSave={onSave}
          selectedId={selectedId}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
        />
      </div>
    </div>
  );
}
export default ToDoList;
