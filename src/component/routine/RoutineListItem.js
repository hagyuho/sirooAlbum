import React from 'react';
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';

const RoutineTodoListItem = () => {
    return (
        <div className="routine-list-item">
            <div className="checkbox">
                <MdCheckBoxOutlineBlank/>
                <div className="text">할인</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default RoutineTodoListItem;