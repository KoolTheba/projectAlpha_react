import React from 'react'

const LogProps = props => {
    return <p
        colors={props.colors}
        isactive={props.isactive}
        cb={props.callBack}
        ncolors={props.numberOfColors}
        name={props.name}
    >{props.children}
    </p>
}

export default LogProps