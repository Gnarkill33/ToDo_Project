import styles from './list.module.css';
import Records from '../../records.json';
import Task from '../Task/Task.jsx'

function List() {
  return (
    <div className='list__wrap'>
        {Records && Records.map((record) => 
            <Task title={record.text} src={record.url} />
        )
        }
    </div>
  );
}

export default List;