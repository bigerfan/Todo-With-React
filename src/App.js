import './App.css';
import { AddTodo } from './Components/addTodo';
import { TodoList } from './Components/todoList';
import { EditModal } from './Components/editModal';
import { TodoContextProvider } from './context/todoContext';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <EditModal/>
        <AddTodo />
        <TodoList/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
