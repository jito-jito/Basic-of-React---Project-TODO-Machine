import React from 'react'
import { TodoIcon } from './TodoIcon'

const CompleteIcon = ({onEvent, color}) => {

    return (
        <TodoIcon type="check" onEvent={onEvent} color={color}/>
    )
}

export { CompleteIcon }