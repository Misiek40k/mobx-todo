import TodoList from './components/TodoList/TodoList';
import TodoAdd from './components/TodoAdd/TodoAdd';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoList />
      <TodoAdd />
    </div>
  );
};

export default App;
