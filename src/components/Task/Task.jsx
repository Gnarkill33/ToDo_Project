import { useState, useEffect, useRef } from 'react';
import styles from './task.module.css'

function Task({ task, onDone, onSubtractClick, onClickSave, id }) {
  const [editMode, setEditMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState(task);
  const inputFieldRef = useRef(null);


  useEffect(() => {
    if (editMode && inputFieldRef.current) {
      inputFieldRef.current.focus();
    }
  }, [editMode]);


  return (
    <div className={styles.task__wrap}>
      <input className={styles.inputField} type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => {
          setChecked(event.target.checked);
          setDisabled(true);
          onSubtractClick();
          setTimeout(() => onDone(), 300);
        }}
      />

      {/*Редактирование задачи*/}
      {editMode
        ? (<input className={styles.inputEdit}
          value={value}
          onChange={(event) => { setValue(event.target.value) }}
          ref={inputFieldRef}
        />)
        : (<p
          onClick={() => { setEditMode(!editMode) }}
          className={checked
            ? styles.task__text_checked
            : styles.task__text}>{task}
        </p>
        )
      }
      {editMode
        ? <button onClick={() => {
          onClickSave(id, value);
          setEditMode(false);
        }}
          className={styles.buttonSave} >
        </button>
        : <button onClick={() => { setEditMode(!editMode) }}
          className={styles.buttonEdit}>
        </button>}

      <button onClick={() => {
        if (window.confirm('Are you sure?')) {
          onDone();
          onSubtractClick();
        }
      }}
        className={styles.buttonDelete}
      ></button>
    </div >
  );
}


export default Task;