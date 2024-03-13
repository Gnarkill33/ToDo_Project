import styles from './button.module.css';

function Button(props) {
    const {name} = props;
  return (
    <div className={styles.addButton}>{name}
      </div>   
  );
}

export default Button;