import './App.css';
import Button from './components/Button/Button.jsx';
import Status from './components/Status/Status.jsx';
import Task from './components/Task/Task.jsx';

function App() {
  return (
    <div className="App">
    <div className='content'>
      <div className='content__wrap'>   
        <h1 classname='content__title'>My tasks: <span classname='content__title content__title_big'>TODO</span> List</h1> 
        <p className='content__text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Status/>
        <Button name='Add new task'/>
    </div> 
    </div>
      <Task/>
    </div>
  );
}

export default App;
