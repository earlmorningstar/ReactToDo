import NewTask from "./NewTask";
import { useState } from "react";

export default function AddTask() {

    const [bringForth, setBringForth] = useState('');

    // function handleClick() {
    //     setBringForth()
    // }


    return (
      <form action="">
          <div className="addTask">
        <button>Create New Task</button>
 
  
        <div className="taskBtnAndSelect">
          <select id="task" name="task">
            <option value="all">All</option>
            <option value="second task">Second task</option>
          </select>
        </div>
        
      </div>

    
      </form>
      
    );
  }
  