import React from 'react';
import Todolist from './Todolist';
import './Template.css';

const Template = ({ children, todoLength }) => {
    const today = new Date();

    const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const getTodayLabel = () => {

        var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

        var today = new Date().getDay();
        var todayLabel = week[today];

        return todayLabel;
    }

    return (
        <div className='container'>
            <div className='header'>
                <div className="date_area">
                    <div className="left_col">
                        <div className="day_area">{today.getDate()}</div>
                    </div>
                    <div className="right_col">
                        <div className="month_area">{monthNames[today.getMonth()]}</div>
                        <div className="year_area">{today.getFullYear()}</div>
                    </div>
                </div>
                <div className="title">TODO LIST</div>
                <div className='todoCount'>할 일 {todoLength}개 남음</div>
            </div>
            <div className='Template'>
                {children}
            </div>
        </div>
    );
}

export default Template;