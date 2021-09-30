import React from 'react'
import { TodoProvider } from '../AppContext'
import { AppUI } from './AppUI';


function App() {
 


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export default App