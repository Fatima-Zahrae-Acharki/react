import React, { Component } from 'react'

//class components

class Welcome extends Component{
    
    // render() {
    //     return (
    //         <h1>class component</h1>
    //     )
    // }


    //props
    render() {
        return (
            <h1>welcome {this.props.name} the {this.props.role}</h1>
        )
    }
}

export default Welcome