import "./App.css";
import Button from "./components/Button/Button.jsx";
import Status from "./components/Status/Status.jsx";
import List from "./components/List/List.jsx";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // Список задач
  const [task, setTask] = useState({
    id: 0,
    title: "",
  }); // Новая задача
  const [counter, setCounter] = useState(0); // Счетчик задач

  // Функция для добавления новой задачи
  const addTask = () => {
    if (task.title !== "") {
      setTasks([...tasks, task]);
      setTask({ id: 0, title: "" });
      setCounter((prev) => prev + 1);
    }
  };

  // Функция для уменьшения счетчика (сделала отдельно от функции удаления)
  const subtractCounter = () => {
    setCounter((prev) => prev - 1);
  };

  // Функция для удаления задачи
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="content">
        <div className="content__wrap">
          <h1 className="content__title">
            My tasks:{" "}
            <span className="content__title content__title_big">TODO</span> List
          </h1>
          <input
            onChange={(event) => {
              setTask({
                id: Math.random().toString(),
                title: event.target.value,
              });
            }}
            className="content__text"
            placeholder="Write your task..."
            value={task.title}
          ></input>
          <Button addOnClick={addTask} name="Add new task" />
          <Status counter={counter} />
        </div>
        <List
          deleteOnClick={deleteTask}
          subtractOnClick={subtractCounter}
          tasks={tasks}
          id={task.id}
        />
      </div>
    </div>
  );
}

export default App;
