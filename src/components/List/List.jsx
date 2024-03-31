import styles from './list.module.css';
// import Records from '../../records.json';
import Task from '../Task/Task.jsx'

function List({ id, tasks, deleteOnClick }) {
  return (
    <div className={styles.list__wrap}>
      {tasks && tasks.map((task, id) =>
        <Task onDone={() => deleteOnClick(id)} key={task.id} task={task.title} />
      )
      }
    </div>
  );
}

export default List;


