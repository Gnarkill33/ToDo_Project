import styles from './list.module.css';
import Task from '../Task/Task.jsx'

function List({ tasks, deleteOnClick, onSubtractClick, onClickSave }) {
  return (
    <div className={styles.list__wrap}>
      {tasks && tasks.map((task) =>
        <Task onDone={() => deleteOnClick(task.id)} id={task.id} onClickSave={onClickSave} onSubtractClick={onSubtractClick} key={task.id} task={task.title} />
      )
      }
    </div>
  );
}

export default List;


