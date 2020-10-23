import React from 'react'
import PropTypes from 'prop-types'

const ShowServerConfig = (props) => {

    return(
        <>
        <h3>I'm showing the Server Config</h3>
        <p>I'm here just to configure my PropTypes</p>
        </>
    )
}

ShowServerConfig.propTypes = {
    minConnections: PropTypes.bool,
    maxConnections: PropTypes.bool,
    restartAlways: PropTypes.bool,
    environment: PropTypes.oneOf(['dev', 'play', 'live']),
    customProp: (props) => {
        if(props[environment] === 'live'){
            return props[SSL] = PropTypes.bool.isRequired
        }
    }
}

export default ShowServerConfig