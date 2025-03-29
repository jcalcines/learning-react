import React from 'react'

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1> Hello World!</h1>
                <p> How are you today {this.props.name}</p>
            </div>
        )
    }
}

export default HelloWorld;