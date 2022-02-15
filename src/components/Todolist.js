import React from 'react';
import TodoItem from './TodoItem';
import './Todolist.css';

const Todolist = ({ todos, onCheck, onRemove, onImportant }) => {
    return (
        <div className='Todolist'>
            {todos.map(todo => <TodoItem todo={todo} key={todo.id} onCheck={onCheck} onRemove={onRemove} onImportant={onImportant}/>)}
        </div>
    );
}

export default Todolist;