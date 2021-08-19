import React from 'react'
import { Search } from 'react-feather'

function SearchBar() {
    return (
        <div style={{ width: '100%' }} className="search-bar">
            <Search className="search-icon" />
            <input className="search-input" placeholder="Search..." />
        </div>
    )
}

export default SearchBar