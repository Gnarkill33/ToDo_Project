import styles from './button.module.css';

function Button({ onCustomClick, name }) {
  return (
    <div onClick={onCustomClick} className={styles.addButton}>{name}
    </div>
  );
}

export default Button;