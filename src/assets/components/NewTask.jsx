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

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }
    onCreateTask(enteredTask);
    setEnteredTask({ title: "", date: "", time: "" });
  }

  return (
    <div className="newTaskDiv">
      <h2>Input New Task:</h2>
      <div className="inputNbtn">
        <div className="inputNbtnInpDiv">
          <div className="labelAndInput">
            <label htmlFor="">Title:</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={enteredTask.title}
              placeholder="Type Task Title here..."
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

/////
// function handleChange(evt) {
//   setEnteredTask(evt.target.value);
// }

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setTask((prevTask) => ({ ...prevTask, [name]: value }));
// };
/////
