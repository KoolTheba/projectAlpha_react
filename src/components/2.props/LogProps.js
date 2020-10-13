import React from 'react'

export default props => {
    return <p
        colors={props.colors}
        isactive={props.isactive}
        cb={props.callBack}
        ncolors={props.numberOfColors}
        name={props.name}
    >{props.children}
    </p>
}