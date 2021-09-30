import React, { useContext } from 'react';
import { TodoContext } from '../AppContext';
import { SearchIcon } from './SearchIcon'

const TodoSearch = () => {
    const {
        searchValue, 
        setSearchValue 
    } = useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(searchValue)
        setSearchValue(event.target.value)
    }

    return (
        <section className="search">
            <div className="search-header"> 
                <SearchIcon color="white"/>
                <h1 className="search-title">Search</h1>
            </div>
            <input
                className="search-input"
                placeholder="Escribe algooo"
                onChange={onSearchValueChange}
            />
        </section>
    )
}

export { TodoSearch }