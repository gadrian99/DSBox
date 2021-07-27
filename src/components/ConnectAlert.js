import React from 'react';
import { RefreshCcw, AlertOctagon } from 'react-feather'

function ConnectAlert() {
    return(
        <div className="connect-alert">
            <AlertOctagon size={'7rem'} color={'#CF6679'} />
            <p className="connect-alert-primary">Oops, it looks like there was an error...</p>
            <p className="connect-alert-secondary">Please make sure Ganache is running and your Metamask wallet is connected to the right network.</p>
            <button className="connect-alert-button" onClick={() => window.location.reload()}><RefreshCcw style={{ marginRight: '1rem' }}/>Reload page</button>
        </div>
    )
}

export default ConnectAlert