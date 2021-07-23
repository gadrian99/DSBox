import React from 'react';
import { PlusSquare, Search, Star } from 'react-feather';

function Header() {
    return(
        <div className="header">
            <p>DropBox</p>
            <div className="header-tools">
                <PlusSquare className="mr-3"/>
                <Search className="mr-3"/>
                <Star />
            </div>
        </div>
    )
}

export default Header