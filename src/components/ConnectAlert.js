import React from 'react';
import { AlertTriangle } from 'react-feather'

function ConnectAlert(props) {
    return(
        <div className="connect-alert">
            <AlertTriangle size={'4rem'} color={'#CF6679'} />
            <p className="connect-alert-primary">Oops, it looks like there was an error loading the data.</p>
            <p className="connect-alert-secondary">Please make sure Ganache is running and Metamask is active.</p>
            <button onClick={() => {
                try {
                    props.loadWeb3()
                    props.loadBlockchainData()
                } catch {
                    return <></>
                }
            }}
            className="connect-alert-button">Connect your wallet</button>
        </div>
    )
}

export default ConnectAlert