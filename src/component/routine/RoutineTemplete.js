import React from 'react';
import './RoutineTemplete.css'

const RoutineTemplete = ({children}) => {

    


    return (
        <div className="RoutineTemplete">
            <div className="routine-title">일정관리</div>
            <div className="routine-content">{children}</div>
        </div>
    );
};

export default RoutineTemplete;