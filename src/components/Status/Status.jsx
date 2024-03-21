import styles from './status.module.css';

function Status({ }) {
  return (
    <div className={styles.status}>
      <div className={styles.status__wrap}>
        <p className={styles.status__count}>125</p>
        <p className={styles.status__text}>Tasks done</p>
      </div>
    </div>
  );
}

export default Status;