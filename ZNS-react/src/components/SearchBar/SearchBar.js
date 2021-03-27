import React from 'react'

import searchBarStyles from './SearchBar.module.css'

const SearchBar = (props) => {

    return (
        <div className={searchBarStyles.searchBar + ' blur'}>
            <input type='text' placeholder='Search' />
            <button></button>
        </div>
    )
}

export default SearchBar 