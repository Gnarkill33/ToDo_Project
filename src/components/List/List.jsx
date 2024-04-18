import styles from './list.module.css';
import Task from '../Task/Task.jsx'

function List({ tasks, deleteOnClick, onSubtractClick }) {
  return (
    <div className={styles.list__wrap}>
      {tasks && tasks.map((task) =>
        <Task onDone={() => deleteOnClick(task.id)} onSubtractClick={onSubtractClick} key={task.id} task={task.title} />
      )
      }
    </div>
  );
}

export default List;


