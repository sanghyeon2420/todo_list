import React, { useState } from 'react';
import './TodoInsert.css';
import { MdAddCircle } from 'react-icons/md';

const TodoInsert = ({ onInsertTodo }) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsertTodo(value);
        setValue("");
    }

    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input type='text' placeholder='추가할 일을 입력하세요.'  value={value} onChange={onChange}></input>
            <button className='insertBtn'><MdAddCircle /></button>
        </form>

    );

}

export default TodoInsert;