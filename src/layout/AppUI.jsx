import React, {useContext, useState} from 'react'
import { TodoContext } from '../AppContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from './modal/Modal';
import { MyLoader } from '../components/Loader';

import '../styles/App.css'

const AppUI = () => {
  const [input, setInput] = useState('')
  const { modal, ToggleModal, addTodo } = useContext(TodoContext)

  const setInputValue = (e) => {
    setInput(e.target.value)
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    addTodo(input);
  }


    return (
        <>
            <main className="main">
                <TodoCounter />
                <TodoSearch />
                
                <TodoContext.Consumer> 
                  { ({
                      error,
                      loading,
                      searchedTodos,
                      onCompleteTodo,
                      onDeleteTodo
                    }) => {
                      return (
                        <TodoList>
                          {error && <p>Desespérate, hubo un error...</p>}
                          {loading && <MyLoader/>}
                          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                          
                          {
                            searchedTodos.map(todo => (
                              <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={onCompleteTodo}
                                onDelete={onDeleteTodo}
                              />
                              ))
                          }
                        </TodoList>
                        
                      )
                      }
                  }
                </TodoContext.Consumer>

                <CreateTodoButton/>

                { modal &&
                  
                  <Modal>
                    <form className="form" action="" onSubmit={onSubmitForm}>
                      <label className="form-title" htmlFor="">Escribe tu nuevo TODO</label>
                      <textarea onChange={setInputValue} className="form-textInput" name="" id="" cols="30" rows="10" placeholder="comprar comida para el michi"></textarea>
                      <div className="form-containerInput">
                        <button onClick={(ToggleModal)} className="form-button--cancel" type="button">Cancelar</button>
                        <button className="form-button--submit" type="submit" >Añadir</button>
                      </div>
                    </form>
                  </Modal>
                }

            </main>
        </>
    
      )
}


export { AppUI }