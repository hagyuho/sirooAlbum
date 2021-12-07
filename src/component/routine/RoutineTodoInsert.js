import React from 'react';
import {MdAdd} from 'react-icons/md'
import './RoutineTemplete.css'

const RoutineTodoInsert = () => {
    return (
        <div>
            <form className="todo-insert">
                <input placeholder="write what to do for SIROO"/>
                <button type="submit">
                    <MdAdd/>
                </button>
            </form>
            
        </div>
    );
};

export default RoutineTodoInsert;