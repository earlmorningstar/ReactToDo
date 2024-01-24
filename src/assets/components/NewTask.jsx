import { useState } from "react";

export default function NewTask({ onCreateTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(evt) {
    setEnteredTask(evt.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }
    onCreateTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="newTaskDiv">
      <h2>Create New Task</h2>
      <div className="inputNbtn">
        <input type="text" onChange={handleChange} value={enteredTask} placeholder="Type here..." />
        <button onClick={handleAddTask}>Save</button>
      </div>
    </div>
  );
}
