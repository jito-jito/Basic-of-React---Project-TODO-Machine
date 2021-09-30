import React, {createContext, useState} from 'react';
import { useLocalStorage } from './utils/useLocalStorage';


const TodoContext = createContext();

function TodoProvider(props) {

  const [modal, setToggleModal] = useState(false)

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
       } = useLocalStorage('TODO_V1', [])
     
      const [ searchValue, setSearchValue ] = useState('');
      
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
    
      let searchedTodos = [];
    
      if (searchValue <= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText);
        })
    
      }
    
      const ToggleModal = () => {
        setToggleModal(preventModal => !preventModal);
      }

      const addTodo = (textInput) => {
        const newTodos = [...todos];
        newTodos.push({
          text: textInput,
          completed: false,
        })
        saveTodos(newTodos)
        ToggleModal()
      }

      const onCompleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newtodos = [...todos];
        let { completed } = newtodos[todoIndex]
        newtodos[todoIndex].completed = !completed;
        saveTodos(newtodos);
        
      }   
    
      const onDeleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
        
      } 

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchedTodos,
            searchValue,
            setSearchValue,
            addTodo,
            onCompleteTodo,
            onDeleteTodo,
            modal,
            ToggleModal,
            setToggleModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }