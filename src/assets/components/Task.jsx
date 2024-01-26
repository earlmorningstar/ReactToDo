import NewTask from "./NewTask.jsx";
import { useState } from "react";

export default function Task() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [enteredTask, setEnteredTask] = useState({});

  // function handleAddTask(taskInfo) {
  //   setEnteredTask((prevTasks) => [...prevTasks, taskInfo]);
  // }


function handleAddTask(taskInfo){
  setEnteredTask((prevTask) =>{
    return {...prevTask, [taskInfo.index]: taskInfo};
  })
}

  return (
    <div>
      <div className="addTask">
        {showNewTask ? (
          <NewTask onCreateTask={handleAddTask} />
        ) : (
          <button onClick={() => setShowNewTask(true)}>Create New Task</button>
        )}
      </div>

      {Object.keys(enteredTask).length > 0 && (
        <div className="sample">
          <h2>Your Todo List</h2>
          <div className="layoutBox">
            <div className="layoutMin">
              <div className="checknTitle">
                <input className="checkbox" type="checkbox" />
                <div>
                  {Object.values(enteredTask).map((task) => (
                    <li className="lists" key={task.index}>
                      <div className="taskTitle">{task.title}</div>
                      <div className="timenDate">
                        <span>{task.time},</span>
                        <span>{task.date}</span>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
              <div className="screenBtn">
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

{
  /* <div className="taskBtnAndSelect">
            <select id="task" name="task">
              <option value="all">All</option>
              <option value="second task">Second task</option>
            </select>
          </div> */
}
