import styles from './task.module.css'

function Task() {
    return (
    <div className={styles.task__wrap}>
        <img className={styles.task__img} src="#" alt="#" />
        <p className={styles.task__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>   
  );
}


export default Task;