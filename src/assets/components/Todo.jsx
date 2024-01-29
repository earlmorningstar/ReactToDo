import NewTask from "./NewTask";
import { useState } from "react";
import Task from "./Task";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

function handleDeleteTask(taskToDelete) {
   const updatedTasks = tasks.filter((task) => task !== taskToDelete);
   setTasks(updatedTasks);
 }

 function handleEditTAsk(oldTask, newTask) {
   const updatedTasks = tasks.map((task) => (task === oldTask ? newTask : task));
   setTasks(updatedTasks);
 }


//  const handleEditTask = (oldTask, newTask) => {
//    const updatedTasks = tasks.map((task) => (task === oldTask ? newTask : task));
//    setTasks(updatedTasks);
//  };

  return (
    <>
      <NewTask onCreateTask={handleAddTask} />
      {tasks.length > 0 && <h2 className="h2list">Your Todo List</h2>}
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={handleDeleteTask} onEdit={handleEditTAsk}/>
      ))}
    </>
  );
}
