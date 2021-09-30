import React, { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    const [ item, setItem ] = useState(initialValue);
  
    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue
            
          } else {
            parsedItem = JSON.parse(localStorageItem);
          
          }
          setItem(parsedItem)
          setLoading(false)
        } catch {
          setError(true)
        }
       
      }, 1000)
    })
  
    const saveItem = (newItem) => {
        try {
          const stringifiedTodos = JSON.stringify(newItem)
          localStorage.setItem(itemName, stringifiedTodos)
          setItem(newItem)
        } catch {
          setError(true)
        }
        
    }
    
    
      // cuando retornamos más de dos valores en react se rfecomienda cambiar de array a objeto
    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage }
    