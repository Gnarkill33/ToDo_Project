import { useState } from 'react';
import styles from './task.module.css'

function Task({ task, onDone, subtractOnClick }) {
  const [editMode, setEditMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');

  return (
    // При клике поле становится редактируемым
    <div className={styles.task__wrap} onClick={() => { setEditMode(!editMode) }}>

      <input className={styles.inputField} type="checkbox"
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          subtractOnClick();
          setInterval(() => onDone(), 800);
        }
        } />

      {/*Редактирование задачи*/}
      {editMode
        ? (<input className={styles.inputEdit} value={value} onChange={(event) => { setValue(event.target.value) }} />)
        : (<p className={checked
          ? styles.task__text_checked
          : styles.task__text}>{task}</p>
        )
      }

      {/*Кнопка Edit + Смена иконок кнопки на галочку (сохранить)*/}
      <button onClick={() => { setEditMode(!editMode) }} className={editMode ? styles.buttonSave : styles.buttonEdit}></button>

      {/*Кнопка Delete с подтверждением*/}
      <button onClick={() => {
        if (window.confirm('Are you sure?')) {
          onDone();
          subtractOnClick();
        }
      }}
        className={styles.buttonDelete}
      ></button>
    </div >
  );
}


export default Task;