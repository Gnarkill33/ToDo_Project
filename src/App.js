import './App.css';
import Button from './components/Button/Button.jsx';
import Status from './components/Status/Status.jsx';
import List from './components/List/List.jsx';
import Image from './assets/images/option3.avif'

function App() {
  return (
    <div className="App">
      <div className='container'>
    <div className='content'>
      <div className='content__wrap'>   
        <h1 className='content__title'>My tasks: <span className='content__title content__title_big'>TODO</span> List</h1> 
        <p className='content__text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Status/>
        <Button name='Add new task'/>
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