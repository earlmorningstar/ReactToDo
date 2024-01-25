import NewTask from "./NewTask.jsx";
import { useState } from "react";

export default function Task() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [task, setTask] = useState([]);

  function handleAddTask(taskInfo) {
    setTask((prevTask) => [...prevTask, taskInfo]);
  }

  return (
    <div>
      <form action="">
        <div className="addTask">
          {showNewTask ? (
            <NewTask onCreateTask={handleAddTask} />
          ) : (
            <button onClick={() => setShowNewTask(true)}>
              Create New Task
            </button>
          )}
        </div>
      </form>

      <div className="layoutBox">
        <div className="layoutMin">
          <div className="checknTitle">
            <input className="checkbox" type="checkbox" />
            <div>
              <div className="taskTitle">Create A React Project</div>
              <div className="timenDate">
                <span>Time,</span>
                <span>Date</span>
              </div>
            </div>
          </div>
          <div className="screenBtn">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}




  {/* <button>Create New Task</button> */}

          {/* <div className="taskBtnAndSelect">
            <select id="task" name="task">
              <option value="all">All</option>
              <option value="second task">Second task</option>
            </select>
          </div> */}