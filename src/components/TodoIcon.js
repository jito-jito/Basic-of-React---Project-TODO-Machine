import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { FaSearch } from 'react-icons/fa'
import { RiAddCircleFill } from 'react-icons/ri'

const iconTypes = {
    "check": color => (
        <FaCheckCircle className="Icon-svg Icon-svg--check"  fill={color}/>
    ),
    "delete": color => (
        <ImCross className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
    "search": color => (
        <FaSearch className="Icon-svg Icon-svg--search" fill={color}/>
    ),
    "add": color => (
        <RiAddCircleFill className="Icon-svg Icon-svg--add" fill={color} />
    )
}

const TodoIcon = ({type, onEvent, color}) => {
    return (
        <figure 
            className={`icon-container  icon-container--${type}`}
            onClick={onEvent}
        >
            {iconTypes[type](color)}

        </figure>
    )
}

export { TodoIcon }