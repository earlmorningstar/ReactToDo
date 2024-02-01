import NewTask from "./NewTask";
import { useState } from "react";
import Task from "./Task";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  function saveTasksToFile(tasks) {
    const jsonString = JSON.stringify(tasks);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToFile(updatedTasks);
  };

  // function handleAddTask(newTask) {
  //   setTasks([...tasks, newTask]);
  // }

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
    saveTasksToFile(updatedTasks);
  };

  // function handleDeleteTask(taskToDelete) {
  //   const updatedTasks = tasks.filter((task) => task !== taskToDelete);
  //   setTasks(updatedTasks);
  // }

  const handleEditTask = (oldTaskTitle, newTaskTitle) => {
    const updatedTasks = tasks.map((task) =>
      task === oldTaskTitle ? { ...task, title: newTaskTitle } : task
    );
    setTasks(updatedTasks);
    saveTasksToFile(updatedTasks);
  };
  // function handleEditTask(oldTaskTitle, newTaskTitle) {
  //   const updatedTasks = tasks.map((task) =>
  //     task === oldTaskTitle ? { ...task, title: newTaskTitle } : task
  //   );
  //   setTasks(updatedTasks);
  // }

  return (
    <>
      <NewTask onCreateTask={handleAddTask} />
      {tasks.length > 0 && <h2 className="h2list">Your Todo List</h2>}
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
        />
      ))}
    </>
  );
}
