import NewTask from "./NewTask";
import { useState, useEffect } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";
// import { saveTasksToLocalStorage, getTasksFromLocalStorage} from "./TodoStorage.js";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   // Load tasks from local storage on component mount
  //   const storedTasks = getTasksFromLocalStorage();
  //   setTasks(storedTasks);
  // }, []);

  // const saveTasks = (updatedTasks) => {
  //   setTasks(updatedTasks);
  //   saveTasksToLocalStorage(updatedTasks);
  // };

  // const handleAddTask = (newTask) => {
  //   const updatedTasks = [...tasks, newTask];
  //   saveTasks(updatedTasks);
  // };

  // const handleDeleteTask = (taskToDelete) => {
  //   const updatedTasks = tasks.filter((task) => task !== taskToDelete);
  //   saveTasks(updatedTasks);
  // };

  // const handleEditTask = (oldTask, newTitle) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task === oldTask ? { ...task, title: newTitle } : task
  //   );
  //   saveTasks(updatedTasks);
  // };

  // --------------------

  // function saveTasksToFile(tasks) {
  //   const jsonString = JSON.stringify(tasks);
  //   const blob = new Blob([jsonString], { type: "application/json" });
  //   const url = URL.createObjectURL(blob);

  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "tasks.json";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // }

  // const handleAddTask = (newTask) => {
  //   const updatedTasks = [...tasks, newTask];
  //   setTasks(updatedTasks);
  //   saveTasksToFile(updatedTasks);
  // };

  // const handleDeleteTask = (taskToDelete) => {
  //   const updatedTasks = tasks.filter((task) => task !== taskToDelete);
  //   setTasks(updatedTasks);
  //   saveTasksToFile(updatedTasks);
  // };

  // const handleEditTask = (oldTaskTitle, newTaskTitle) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task === oldTaskTitle ? { ...task, title: newTaskTitle } : task
  //   );
  //   setTasks(updatedTasks);
  //   saveTasksToFile(updatedTasks);
  // };

  // ----------------

  useEffect(() => {
    // Fetch tasks from the server on component mount
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5174/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const saveTasks = async (updatedTasks) => {
    setTasks(updatedTasks);

    try {
      const response = await fetch("http://localhost:5174/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTasks),
      });

      if (response.ok) {
        console.log("Tasks saved successfully.");
      } else {
        console.error("Error saving tasks.");
      }
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  };

  function handleAddTask(newTask) {
    const taskId = uuidv4();
    const taskWithId = { ...newTask, id: taskId };
    setTasks([...tasks, taskWithId]);
    // setTasks([...tasks, newTask]);
  }

  // function handleDeleteTask(taskToDelete) {
  //   const updatedTasks = tasks.filter((task) => task !== taskToDelete);
  //   setTasks(updatedTasks);
  // }

  function handleDeleteTask(taskToDelete) {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  }

  // function handleEditTask(oldTaskTitle, newTaskTitle) {
  //   const updatedTasks = tasks.map((task) =>
  //     task === oldTaskTitle ? { ...task, title: newTaskTitle } : task
  //   );
  //   setTasks(updatedTasks);
  // }

  function handleEditTask(oldTask, newTaskTitle) {
    const updatedTasks = tasks.map((task) =>
      task.id === oldTask.id ? { ...task, title: newTaskTitle } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <>
      <NewTask onCreateTask={handleAddTask} />
      {tasks.length > 0 && <h2 className="h2list">Your Todo List</h2>}
      {tasks.map((task, index) => (
        <Task
          // key={index}
          key={task.id}
          task={task}
          setTasks={saveTasks}
          onDelete={handleDeleteTask}
          onEdit={handleEditTask}
        />
      ))}
    </>
  );
}
