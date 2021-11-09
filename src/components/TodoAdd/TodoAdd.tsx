import { useContext, useState } from 'react';
import TodoStore from '../../store/TodoStore';
import { observer } from 'mobx-react-lite';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const todoStore = useContext(TodoStore);
  const { addTodo, info } = todoStore;

  return (
    <>
      <div className='alert alert-primary'>
        <div>
          <span>Total items:</span>
          <span>{info.total}</span>
        </div>
        <div>
          <span>Finished items:</span>
          <span>{info.completed}</span>
        </div>
        <div>
          <span>Unfinished items:</span>
          <span>{info.notCompleted}</span>
        </div>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          type='text'
          value={title}
          placeholder='Todo title...'
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <button
          className='btn btn-primary'
          onClick={() => {
            addTodo({
              title: title,
              completed: false,
            });
            setTitle('');
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default observer(AddTodo);
