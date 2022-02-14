import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdStarOutline, MdStar } from 'react-icons/md';
import './TodoItem.css';

const TodoItem = ({ todo, onCheck }) => {
    const { id, text, checked } = todo;
    return (
        <div className='TodoItem'>
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? <MdCheckBox onClick={() => {
                    onCheck(id);
                }} /> : <MdCheckBoxOutlineBlank onClick={() => {
                    onCheck(id);
                }} />}
                <div className='text'><b>{text}</b><MdRemoveCircleOutline /></div>
            </div>
        </div >
    );
}

export default TodoItem;