import './App.css';
import Button from './components/Button/Button.jsx';
import Status from './components/Status/Status.jsx';
import List from './components/List/List.jsx';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    id: 0,
    title: '',
  });
  const [counter, setCounter] = useState(0);

  const addTask = () => {
    if (newTask.title !== '') {
      setTasks([...tasks, newTask]);
      setNewTask({ id: 0, title: '' });
      setCounter((prev) => prev + 1);
    }
  };

  const saveTask = (id, value) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: value,
          };
        }
        return task;
      }),
    );
  };

  const subtractCounter = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="content">
        <div className="content__wrap">
          <h1 className="content__title">
            My tasks:
            <span className="content__title content__title_big">
              {' '}
              TODO
            </span>{' '}
            List
          </h1>
          <input
            onChange={(event) => {
              setNewTask({
                id: Math.random().toString(),
                title: event.target.value,
              });
            }}
            className="content__text"
            placeholder="Write your task..."
            value={newTask.title}
            autoFocus
          ></input>
          <Button addOnClick={addTask} name="Add new task" />
          <Status counter={counter} />
        </div>
        <List
          onClickSave={saveTask}
          deleteOnClick={deleteTask}
          onSubtractClick={subtractCounter}
          tasks={tasks}
          id={newTask.id}
        />
      </div>
    </div>
  );
}

export default App;
