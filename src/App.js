import './App.css';
import Button from './components/Button/Button.jsx';
import Task from './components/Task/Task.jsx';

function App() {
  return (
    <div className="App">
    <div className='content'>
      <h1 classname='title'>Bring GREEN to your home and make you feel better</h1>  
    </div> 
      <Button name='Find your plant'/>
      <Task/>
    </div>
  );
}

export default App;
