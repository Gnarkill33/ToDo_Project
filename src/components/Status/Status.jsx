import styles from './status.module.css';

function Status({ counter }) {
  return (
    <div className={styles.status}>
      <div className={styles.status__wrap}>
        <p className={styles.status__count}>{counter}</p>
        <p className={styles.status__text}>New tasks</p>
      </div>
    </div>
  );
}

export default Status;