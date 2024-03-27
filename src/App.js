import './App.css';
import Button from './components/Button/Button.jsx';
import Status from './components/Status/Status.jsx';
import List from './components/List/List.jsx';
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');


// Функция для добавления новой задачи
  const addToDo = () => {
    if (toDo !== '') {
      setToDos([...toDos, toDo]);
      setToDo('');
    }
  };

  return (
    <div className="App">
      {/* <div className='container'> */}
    <div className='content'>
      <div className='content__wrap'>   
        <h1 className='content__title'>My tasks: <span className='content__title content__title_big'>TODO</span> List</h1> 
        <input onChange={(event) => {

// Получаем значение из input и записываем в переменную toDo

          setToDo(event.target.value)
        }} className='content__text' placeholder='Write your task' value={toDo}></input>

{/* Кнопка для добавления новой задачи */}

        <Button onCustomClick={addToDo} name='Add new task'/>
        <Status/>
      </div>
      <List toDos={toDos}/>
    </div> 
    </div>
  );
}

export default App;