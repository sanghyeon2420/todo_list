import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdStar } from 'react-icons/md';
import './TodoItem.css';

const TodoItem = ({ todo, onCheck, onRemove, onImportant }) => {
    const { id, text, checked, important } = todo;
    return (
        <div className={`TodoItem ${important ? 'important' : ''}`}>
            <div className={`content ${checked ? 'checked' : ''} `}>
                <div className='checkBtn'>
                    {checked ? <MdCheckBox onClick={() => {
                        onCheck(id);
                    }} /> : <MdCheckBoxOutlineBlank onClick={() => {
                        onCheck(id);
                    }} />}
                </div>
                <div className='text'><b>{text}</b></div>
                <div className={`isLike ${important ? 'important' : ''}`}>
                    <MdStar onClick={()=>{
                        onImportant(id);
                    }}/>
                </div>
                <div className='removeBtn'>
                    <MdRemoveCircleOutline onClick={() => {
                        onRemove(id);
                    }}/>
                </div>
            </div>
        </div >
    );
}

export default TodoItem;