import styles from './task.module.css'

function Task({ toDo }) {
  return (
    <div className={styles.task__wrap}>
      <img className={styles.task__img} alt="#" />
      <input type="checkbox" />
      <p className={styles.task__text}>{toDo}</p>
    </div>
  );
}


export default Task;