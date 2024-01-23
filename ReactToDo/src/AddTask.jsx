export default function AddTask() {

    
  return (
    <div className="addTask">
      <button>Add Task</button>
      <div className="taskBtnAndSelect">
        <select id="task" name="task">
          <option value="all">All</option>
          <option value="second task">Second task</option>
        </select>
      </div>
    </div>
  );
}
