import styles from './button.module.css';

function Button({name}) {
  return (
    <div className={styles.addButton}>{name}
      </div>   
  );
}

export default Button;