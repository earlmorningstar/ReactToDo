import { useState, useEffect } from "react";

export default function Task({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);

  useEffect(() => {
    setEditedTask(task.title);
  }, [task.title]);

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    onEdit(task, editedTask);
    setIsEditing(false);
  }

  const handleEditInputChange = (evt) => {
    setEditedTask(evt.target.value);
  };

  return (
    <>
      {isEditing ? (
        <>
        <div className="editSaveBtn">
          <input
            type="text"
            value={editedTask}
            onChange={handleEditInputChange}
            className="editInput"
          />
          <button onClick={handleSaveClick} className="editedSaveBtn">Save</button>
        </div>
        </>
      ) : (
        <div className="sample">
          <div className="layoutBox">
            <div className="layoutMin">
              <div className="checknTitle">
                {/* <input className="checkbox" type="checkbox" /> */}
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
        </div>
      )}
    </>
  );
}
