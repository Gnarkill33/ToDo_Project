import './App.css';
import Button from './components/Button/Button.jsx';
import Status from './components/Status/Status.jsx';
import List from './components/List/List.jsx';
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    id: 0,
    title:'',
  });

// Функция для добавления новой задачи
  const addTask = () => {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask({title: ''});
    }
  };

// Функция для удаления задачи
  const deleteTask = (id) => {
    console.log(id);
    setTasks([...tasks].filter(task => task.id !== id));
  };

  return (
    <div className="App">
    <div className='content'>
      <div className='content__wrap'>   
        <h1 className='content__title'>My tasks: <span className='content__title content__title_big'>TODO</span> List</h1> 
        <input onChange={(event) => {setTask({id: new Date().toString(), title: event.target.value})}} className='content__text' placeholder='Write your task...' value={task.title}></input>
        <Button addOnClick={addTask} name='Add new task'/> 
        <Status/>
      </div>
      <List deleteOnClick={deleteTask} tasks={tasks} id={task.id}/>
    </div> 
    </div>
  );
}

export default App;