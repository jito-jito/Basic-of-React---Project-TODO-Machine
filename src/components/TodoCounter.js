import React, {useContext} from 'react';
import {TodoContext} from '../AppContext';



function TodoCounter() {
    const {
        totalTodos,
        completedTodos
    } = useContext(TodoContext)

    return (
        <h2 className="counter-title">Has completado {completedTodos} de {totalTodos} TODOs</h2>    

    )
}

export { TodoCounter }