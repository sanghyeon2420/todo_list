import logo from './logo.svg';
import './App.css';
import Template from './components/Template';
import Todolist from './components/Todolist';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: true
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

  return (
    <Template>
      <Todolist todos={todos}>간단한 컴포넌트</Todolist>
    </Template>
  );
}



export default App;
