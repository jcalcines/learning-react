import React from 'react'

function HelloWorldFunctional (props) {
    return (
        <div>
            <h1> Hello World!</h1>
            <p> How are you today {props.name}</p>
        </div>
    )
}

export default HelloWorldFunctional;