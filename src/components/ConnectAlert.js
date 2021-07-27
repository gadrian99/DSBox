import React from 'react';
import { AlertTriangle } from 'react-feather'

function ConnectAlert() {
    return(
        <div className="connect-alert">
            <AlertTriangle size={'7rem'} color={'#CF6679'} />
            <p className="connect-alert-primary">Oops, it looks like there was an error loading the data.</p>
            <p className="connect-alert-secondary">Please make sure Ganache is running and your Metamask wallet is connected.</p>
            <button className="connect-alert-button" onClick={() => window.location.reload()}>Reload page</button>
        </div>
    )
}

export default ConnectAlert