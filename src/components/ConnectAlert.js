import React from 'react';
import { RefreshCcw, AlertOctagon } from 'react-feather'
import { useSpring, animated } from 'react-spring'

function ConnectAlert() {
    const spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 })
    return(
        <animated.div style={spring} className="connect-alert">
            <AlertOctagon size={'7rem'} color={'#CF6679'} />
            <p className="connect-alert-primary">Oops, it looks like there was an error...</p>
            <p className="connect-alert-secondary">Please make sure your Metamask wallet is connected to the right network.</p>
            <button className="connect-alert-button" onClick={() => window.location.reload()}><RefreshCcw style={{ marginRight: '1rem' }}/>Reload page</button>
        </animated.div>
    )
}

export default ConnectAlert