import styles from './list.module.css';
// import Records from '../../records.json';
import Task from '../Task/Task.jsx'

function List({ tasks, deleteOnClick, subtractOnClick }) {
  return (
    <div className={styles.list__wrap}>
      {tasks && tasks.map((task) =>
        <Task onDone={() => { deleteOnClick(task.id) }} subtractOnClick={subtractOnClick} key={task.id} task={task.title} />
      )
      }
    </div>
  );
}

export default List;


