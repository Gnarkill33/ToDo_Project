import styles from './task.module.css'

function Task({ task, deleteOnClick }) {

  return (
    <div className={styles.task__wrap}>
      <input type="checkbox" />
      <p className={styles.task__text}>{task}</p>
      <button onClick={deleteOnClick()}>Delete</button>
    </div>
  );
}


export default Task;