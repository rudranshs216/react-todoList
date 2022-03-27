import React, { useState } from 'react';
import './App.css';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const [id, setId] = useState(0);

  const newTask = (e) => {
    e.preventDefault();
   
      const addTask = {
        id: id,
        name: input,
        complete: false
      }
      setTask([...task, addTask]);
      
      setId(id+1);
      setInput("");
  }

  //delete

  const Delete = (id) => {
    const filterTask = task.filter((tasks)=> tasks.id !== id);
    setTask(filterTask);
   

  }

  //toggle
  const toggleTask = (id) => {
    const toggleTasksss = task.map((task) => (task.id === id ? {...task,complete: !task.complete}: task))
    setTask(toggleTasksss);
  }

  return (
    <div className="App">
    <div className="container">
    <h1>ToDo List</h1>
  <div className="form">
  <form onSubmit={newTask}>
      <AddIcon className='icon' onClick={newTask}/>
      <input 
      type="text"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
       />
    </form>
  </div>
    

    <div className="map">
      {task.map((task) => (
        
        <div className={!task.complete ? 'task' : "task lineThrough"} onDoubleClick={()=>toggleTask(task.id)} key={task.id}>
        <p>{task.name}<ClearIcon className='pIcon icon' onClick={() => Delete(task.id)}/></p> 

        </div>
      ))}
    </div>

    </div>
    
      
    </div>
  );
}

export default App;
