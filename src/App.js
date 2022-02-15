
import { useState } from 'react';
import './App.css';
import Template from './components/Template';
import Todolist from './components/Todolist';
import TodoInsert from './components/TodoInsert';

let nextId = 4;

const App = () => {


  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부하기",
      checked: true
    },
    {
      id: 2,
      text: "Spring Framework 공부하기",
      checked: true
    },
    {
      id: 3,
      text: "MySQL 공부하기",
      checked: false
    }

  ]);

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }

      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onCheck = (id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  // const getTodoLength = () => {
  //   if(todos.checked===false
  // }
  return (

    <Template todoLength={todos.length}>
      <TodoInsert onInsertTodo={onInsertTodo} />
      <Todolist todos={todos} onInsertTodo={onInsertTodo} onCheck={onCheck} onRemove={onRemove} />
    </Template>
  );
}



export default App;
