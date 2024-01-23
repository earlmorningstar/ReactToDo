export default function Task() {

    
  return (
    <>
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
    </>
  );
}


