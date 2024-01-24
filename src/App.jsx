import './App.css'
import { useState } from 'react';
import AddTask from './assets/components/AddTask.jsx';
import Task from './assets/components/Task.jsx';
import Header from './assets/components/Header.jsx';

function App() {
 
  const [TodoState, setTodoState] = useState({
    
  })

  return (
    <>
    <Header/>
    <AddTask />
    <Task />
    </>
  )
}

export default App
