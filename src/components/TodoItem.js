import React from 'react'
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
 

function TodoItem({ text, completed, onComplete, onDelete }) {
    
    return (
        <>
            <li className={`list-item ${completed ? ' completed': ''}`}>
                <CompleteIcon type="check" onEvent={() => onComplete(text)} color={completed ? 'rgb(25, 168, 25)' : 'rgba(0, 0, 0, 0.65)'}/>
                <p className="list-content">{text}</p>
                <DeleteIcon type="delete" onEvent={() => onDelete(text)} color="black"/>
            </li>
            
        </>
    )

}


export { TodoItem }