import styles from './list.module.css';
// import Records from '../../records.json';
import Task from '../Task/Task.jsx'

function List({ toDos }) {
  return (
    <div className={styles.list__wrap}>
      {toDos && toDos.map((toDo, id) =>
        <Task key={id} toDo={toDo} />
      )
      }
    </div>
  );
}

export default List;


