import React from 'react'
import { TodoIcon } from './TodoIcon'


const DeleteIcon = ({type, onEvent, color}) => {

    return (
        <TodoIcon type={type} onEvent={onEvent} color={color} />    
    )
}

export { DeleteIcon }