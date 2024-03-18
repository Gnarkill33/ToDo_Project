import styles from './task.module.css'

function Task({text, src}) {
    return (
          <div className={styles.task__wrap}>
            <img className={styles.task__img} src={src} alt="#" />
            <p className={styles.task__text}>{text}</p>
          </div> 
  );
}


export default Task;