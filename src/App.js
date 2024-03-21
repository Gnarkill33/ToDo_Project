import './App.css';
import Button from './components/Button/Button.jsx';
import Status from './components/Status/Status.jsx';
import List from './components/List/List.jsx';
import Image from './assets/images/option4.jpg'

function App() {
  return (
    <div className="App">
      <div className='container'>
    <div className='content'>
      <div className='content__wrap'>   
        <h1 className='content__title'>My tasks: <span className='content__title content__title_big'>TODO</span> List</h1> 
        <input className='content__text'></input>
        <Button name='Add new task'/>
        <Status/>
    </div> 
    </div>
    <div className='image'>
      <img className='background-image' src={Image} alt="" />
    </div>
    </div>
      <List/>
    </div>
  );
}

export default App;