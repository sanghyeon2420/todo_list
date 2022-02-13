import logo from './logo.svg';
import './App.css';
import Template from './components/Template';
import Todolist from './components/Todolist';
import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  };

  return (
    <Template todoLength={todos.length}>
      <Todolist todos={todos}></Todolist>
      <div className="add-todo-button" onClick={onInsertToggle}><MdAddCircle/></div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} />}
    </Template>
  );
}



export default App;
