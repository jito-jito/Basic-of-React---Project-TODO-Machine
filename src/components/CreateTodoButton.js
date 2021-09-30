import React, {useContext} from 'react'
import { TodoContext } from '../AppContext'
import { AddIcon } from './AddIcon'

const CreateTodoButton = () => {
    const {
        modal,
        setToggleModal
    } = useContext(TodoContext) 

    const onClickButton = () => {
        //se usa una funcion dentro del método para cambiar el estado, de manera que podamos asegurarnos de recibir el estado previo, el ultimo estado de la app
        setToggleModal(prevModal => !prevModal)
    }


    return (
        <AddIcon onEvent={onClickButton} color={modal===true ? 'rgb(255,255,255)' : 'rgba(0,0,0,.65)'}/>
    )


}


export { CreateTodoButton }