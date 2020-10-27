import React from 'react'
import PropTypes from 'prop-types'

const ShowServerConfig = (props) => {

    console.log('PROPS', props)

    return(
        <>
        <h3>I'm showing the Server Config</h3>
        <p>I'm here just to configure my PropTypes</p>
        </>
    )
}

ShowServerConfig.propTypes = {
    config: PropTypes.exact({
        minConnections: PropTypes.number,
        maxConnections: PropTypes.number,
        restartAlways: PropTypes.bool,
    }).isRequired,
    environment: PropTypes.oneOf(['dev', 'play', 'live']),
    SSL: (props) => {
        if(props.environment === 'live' && !props.ssl) return new Error('SSL is required if enrironment is live')
    }
}

export default ShowServerConfig