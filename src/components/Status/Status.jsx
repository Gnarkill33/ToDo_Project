import styles from './status.module.css';

function Status({}) {
  return (
    <div className={styles.status}>
        <div className={styles.status__wrap}>
            <p className='status__count'>125</p>
            <hr className={styles.status__line}/>
            <p className='status__text'>Lorem ipsum dolor sit amet</p>
        </div>  
    </div>
  );
}

export default Status;