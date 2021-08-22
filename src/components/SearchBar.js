import React from 'react'
import { Search } from 'react-feather'

function SearchBar() {
    return (
        <>
            <img alt="logo" src="/assets/Logo.svg" className="logo"></img>
            <div style={{ width: '100%' }} className="search-bar">
                <Search className="search-icon" />
                <input className="search-input" placeholder="Search..." />
            </div>
        </>
    )
}

export default SearchBar