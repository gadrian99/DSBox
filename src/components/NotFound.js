import React from 'react'
import { Frown } from 'react-feather'

function NotFound() {
    return(
        <div className="notfound-alert">
            <Frown size={'7rem'} color={'#CF6679'} strokeWidth={1.5} />
            <p style={{ marginTop: '2rem' }} className="connect-alert-secondary">Nothing to find here...</p>
        </div>
    )
}

export default NotFound