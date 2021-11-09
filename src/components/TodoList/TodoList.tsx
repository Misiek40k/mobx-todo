import { useContext } from 'react';
import TodoStore from '../../store/TodoStore';
import { observer } from 'mobx-react-lite';

const TodoList = () => {
  const todoStore = useContext(TodoStore);
  const { todos, toggleTodo, removeTodo } = todoStore;
  return (
    <>
      <div className='row'>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Title</th>
              <th>Completed?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'completed' : ''}</td>
                <td>
                  <button onClick={() => toggleTodo(todo.id!)}>
                    Toggle
                  </button>
                  <button
                    onClick={() => removeTodo(todo.id!)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default observer(TodoList);
