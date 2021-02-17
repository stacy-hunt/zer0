import React from 'react'

import searchBarStyles from '../styles/SearchBar.module.css'

const SearchBar = (props) => {

    return (
        <div>
            <div className={searchBarStyles.searchBar + ' blur'}>
                <input type='text' placeholder='Search' />
                <button></button>
            </div>
        </div>
    )
}

export default SearchBar 