import React from 'react';
import TodoItem from './TodoItem';
import './Todolist.css';

const Todolist = ({todos}) => {
    return (
            <div className='Todolist'>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.id}></TodoItem>
                ))}
            </div>
        );
};

export default Todolist;