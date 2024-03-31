import { useState } from 'react';
import styles from './task.module.css'

function Task({ id, task, onDone }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.task__wrap}>
      <input type="checkbox" checked={checked} onChange={(event) => setChecked(event.target.checked)} /> {/* условный рендеринг для checked*/}
      <p className={styles.task__text}>{task}</p>
      <button onClick={() => onDone(id)} >Delete</button>
    </div>
  );
}


export default Task;