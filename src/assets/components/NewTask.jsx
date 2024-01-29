import { useState } from "react";

export default function NewTask({onCreateTask}) {
  const [enteredTaskData, setEnteredTaskData] = useState({
    title: "",
    date: "",
    time: "",
  });

  const handleInputChange = (evt) => {
    setEnteredTaskData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  function HandleSaveTask(){
    if (enteredTaskData.title.trim() === "") {
            return;
          }
    onCreateTask(enteredTaskData);
    setEnteredTaskData({ title: "", date: "", time: "" });
  }


  return (
    <>
      <div className="newTaskDiv">
        <h2>Input New Todo:</h2>
        <div className="inputNbtn">
          <div className="inputNbtnInpDiv">
            <div className="labelAndInput">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={enteredTaskData.title}
                onChange={handleInputChange}
                placeholder="Type Todo Title here..."
              />
            </div>
            <div className="labelAndInput">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={enteredTaskData.date}
                onChange={handleInputChange}
              />
            </div>
            <div className="labelAndInput">
             <label htmlFor="">Time:</label>
             <input
              type="time"
              name="time"
              onChange={handleInputChange}
              value={enteredTaskData.time}
            />
          </div>
          </div>
          <button onClick={HandleSaveTask}>Save</button>
        </div>
      </div>
    </>
  );
}
