export default function Task() {
    return (
        <>
        <div className="layoutBox">
            <div className="layoutMin">
                <div className="checknTitle">
                    <input className="checkbox" type="checkbox"/>
                    <div>
                        <div className="taskTitle">Create A  React Project</div>
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
    )
}


{/* <div className="item">
<input type="checkbox" />
<div>
    <p>Create a React Project</p>
    <span className="datenTime">
        <p>Time</p>
        <p>Date</p>
    </span>
</div>
<div>
    <span>Delete</span>
    <span>Edit</span>
</div>
</div> */}