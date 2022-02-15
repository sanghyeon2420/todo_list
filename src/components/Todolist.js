import React from 'react';
import TodoItem from './TodoItem';
import './Todolist.css';

const Todolist = ({ todos, onCheck, onRemove }) => {
    return (
        <div className='Todolist'>
            {todos.map(todo => <TodoItem todo={todo} key={todo.id} onCheck={onCheck} onRemove={onRemove} />)}
        </div>
    );
}

export default Todolist;