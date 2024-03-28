import styles from './button.module.css';

function Button({ addOnClick, name }) {
  return (
    <div onClick={addOnClick} className={styles.addButton}>{name}
    </div>
  );
}

export default Button;