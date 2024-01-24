import './App.css'
import { useState } from 'react';
import Task from './assets/components/Task.jsx';
import Header from './assets/components/Header.jsx';
// import NewTask from './assets/components/NewTask.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
 
  // const [showNewTask, setShowNewTask] = useState(false);

  // function handleAddTask(taskText) {
  //   setShowNewTask(false);
  // }

  return (
    <>
    
    <Router>
    <Header/>
    {/* {showNewTask ? (<NewTask onCreateTask={handleAddTask} />) 
    : <button onClick={() => setShowNewTask(true)}>Create New Task</button>} */}
    <Task />


    </Router>
    </>
    
  )
}

export default App
