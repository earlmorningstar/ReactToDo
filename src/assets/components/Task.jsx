import NewTask from "./NewTask.jsx";
import { useState } from "react";

export default function Task({ task, onDelete, onEdit }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  function handleEditClick() {
    setIsEditing(true);
  };

  function handleSaveClick(){
    onEdit(task, editedTask);
    setIsEditing(false);
  }


  return (
    
    <>
    {isEditing ? (<>
    <input type="text" 
    value={editedTask}
    onChange={(e) => setEditedTask(e.target.value)} />
    <button onClick={handleSaveClick}>Save</button>
    </>) : (<div className="sample">
      {/* <h2>Your Todo List</h2> */}
      <div className="layoutBox">
        <div className="layoutMin">
          <div className="checknTitle">
            <input className="checkbox" type="checkbox" />
            <div>
              <h1>
                <li className="lists" key={task.index}>
                  <div className="taskTitle">{task.title}</div>
                  <div className="timenDate">
                    <span>{task.time},</span>
                    <span>{task.date}</span>
                  </div>
                </li>
              </h1>
            </div>
          </div>
          <div className="screenBtn">
            <button onClick={() => onDelete(task)}>Delete</button>
            <button onClick={handleEditClick}>Edit</button>
          </div>
        </div>
      </div>
    </div>) }
    
    
    </>

    
  );
}


