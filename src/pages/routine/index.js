import React from 'react';
import RoutineTemplete from '../../component/routine/RoutineTemplete';
import RoutineTodoInsert from '../../component/routine/RoutineTodoInsert';
import RoutineTodoList from '../../component/routine/RoutineTodoList';

const Routine = () => {
    return (
        <div>
           <RoutineTemplete>
               <RoutineTodoInsert/>
               <RoutineTodoList/>
           </RoutineTemplete>
        </div>
    );
};

export default Routine;