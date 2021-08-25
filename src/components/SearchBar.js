import React, { useState } from 'react'
import { Search } from 'react-feather'

export default function SearchBar({ files }) {
    const [searchField, setSearchField] = useState("");

    const filteredFiles = files.filter(
        file => {
        return (
            file
            .fileName
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
            file
            .fileDescription
            .toLowerCase()
            .includes(searchField.toLowerCase())
        );
        }
    );
    //write renderList for new components
    function handleChange(e) {
        setSearchField(e.target.value)
    }

    console.log(filteredFiles)

    return (
        <>
            <img alt="logo" src="/assets/Logo.svg" className="logo"></img>
            <div style={{ width: '100%' }} className="search-bar">
                <Search className="search-icon" />
                <input className="search-input" placeholder="Search..." onChange={handleChange}/>
            </div>
        </>
    )
}

