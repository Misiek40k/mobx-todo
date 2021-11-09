import TodoList from './components/List/List';
import TodoAdd from './components/Add/TodoAdd';
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
