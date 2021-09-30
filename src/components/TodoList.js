import React from 'react'

function TodoList(props) {

    return (
        <section className="list-container">
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }