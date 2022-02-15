
import { useState, useCallback } from 'react';
import Swal from 'sweetalert2';
import './App.css';
import Template from './components/Template';
import TodoInsert from './components/TodoInsert';
import Todolist from './components/Todolist';

let nextId = 4;

const App = () => {

  


  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부하기",
      checked: false,
      important: false
    },
    {
      id: 2,
      text: "Spring Framework 공부하기",
      checked: true,
      important: false
    },
    {
      id: 3,
      text: "MySQL 공부하기",
      checked: true,
      important: true
    }

  ]);

  const onInsertTodo = (text) => {
    if (text === "") {
      return Swal.fire({
        text: '추가할 일을 입력하세요.',
        icon: 'error',
        confirmButtonText: '확인'
      });
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
        important: false
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
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  }

  const onImportant = (id) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }

  return (

    <Template todoLength={todos.length}>
      <TodoInsert onInsertTodo={onInsertTodo} />
      <Todolist todos={todos} onInsertTodo={onInsertTodo} onCheck={onCheck} onRemove={onRemove} onImportant={onImportant}/>
    </Template>
  );
}



export default App;
