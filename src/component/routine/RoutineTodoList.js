import React from 'react';
import RoutineTodoListItem from './RoutineListItem';

const RoutineTodoList = () => {
    return (
        <div className="routine-list">
            <RoutineTodoListItem/>
            <RoutineTodoListItem/>
            <RoutineTodoListItem/>
        </div>
    );
};

export default RoutineTodoList;