import React, { Component } from 'react'

//class components


class Message extends Component{
    //state/////////
    
    constructor(){
        super()
        this.state = {
            message: 'welcome Kirby'
        }
    }
    changeMessage(){
        this.setState({
            message: 'thanks'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()} > OK</button>
            </div>
        )
    }
}

export default Message