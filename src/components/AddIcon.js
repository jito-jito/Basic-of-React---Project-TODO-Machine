import React from 'react'
import { TodoIcon } from './TodoIcon'


const AddIcon = ( { onEvent, color } ) => {

    return (
        <TodoIcon type="add" onEvent={onEvent} color={color}/>
    )
}

export { AddIcon }