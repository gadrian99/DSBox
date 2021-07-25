import React from 'react';
import { PlusSquare, Search, Star } from 'react-feather';

function Header() {
    return(
        <div className="header">
            <p style={{ fontFamily: 'Oleo Script, cursive'}}>OStorage</p>
            <div className="header-tools">
                <PlusSquare className="mr-3"/>
                <Search className="mr-3"/>
                <Star />
            </div>
        </div>
    )
}

export default Header