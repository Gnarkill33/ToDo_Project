import { useState } from 'react';
import styles from './task.module.css'

function Task({ id, task, onDone }) {
  const [editMode, setEditMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');


  return (
    <div className={styles.task__wrap}>

      <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /> {/* условный рендеринг для checked с функцией Delete*/}

      {editMode ? (<input className={styles.inputEdit} value={value} onChange={(event) => { setValue(event.target.value) }} />) : (<p className={styles.task__text}>{task}</p>)}

      <button onClick={() => { setEditMode(!editMode) }} className={styles.buttonEdit}></button>

      <button onClick={() => { onDone(id) }} className={styles.buttonDelete}></button>
    </div>
  );
}


export default Task;