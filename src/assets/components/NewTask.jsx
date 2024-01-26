import { useState } from "react";

export default function NewTask({ onCreateTask }) {
  const [enteredTask, setEnteredTask] = useState({
    title: "",
    date: "",
    time: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setEnteredTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  }

  // function handleAddTask() {
  //   if (enteredTask.title.trim() === "") {
  //     return;
  //   }
  //   onCreateTask(enteredTask);
  //   setEnteredTask({ title: "", date: "", time: "" });
  // }

  function handleAddTask() {
    if (enteredTask.title.trim() === "") {
      return;
    }
    const taskIndex = Object.keys(enteredTask).length; // Get the next available index
    onCreateTask({ ...enteredTask, index: taskIndex }); // Include the index in the task object
    setEnteredTask({ title: "", date: "", time: "" });
  }




  return (
    <div className="newTaskDiv">
      <h2>Input New Todo:</h2>
      <div className="inputNbtn">
        <div className="inputNbtnInpDiv">
          <div className="labelAndInput">
            <label htmlFor="">Title:</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={enteredTask.title}
              placeholder="Type Todo Title here..."
            />
          </div>
          <div className="labelAndInput">
            <label htmlFor="">Date:</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={enteredTask.date}
            />
          </div>
          <div className="labelAndInput">
            <label htmlFor="">Time:</label>
            <input
              type="time"
              name="time"
              onChange={handleChange}
              value={enteredTask.time}
            />
          </div>
        </div>

        <button onClick={handleAddTask}>Save</button>
      </div>
    </div>
  );
}
