import styles from './list.module.css';
// import Records from '../../records.json';
import Task from '../Task/Task.jsx'

function List({ tasks, deleteOnClick }) {
  return (
    <div className={styles.list__wrap}>
      {tasks && tasks.map((task, id) =>
        <Task deleteOnClick={deleteOnClick} key={id} task={task} />
      )
      }
    </div>
  );
}

export default List;


