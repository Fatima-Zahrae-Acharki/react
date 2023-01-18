import React, { Component } from 'react'

class EventBind extends Component {
//state property
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'chungus'
      }

    //   binding in class constructor 3
      this.clickHandler = this.clickHandler.bind(this)

    }
    //
    
    // clickHandler(){
    //     this.setState({
    //         message: 'big chungus'
    //     })


    // }


    //class property as arrow function 4
    clickHandler = () =>{
        this.setState({
            message:'die'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* binding in render 1*/}
        {/* <button onClick={this.clickHandler.bind(this)} >CLICK</button> */}
        {/* using arrow functions in render 2*/}
        <button onClick={()=> this.clickHandler()} >CLICK</button>
        {/* deals with biding the event handler in the constructor */}

      </div>
    )
  }
}

export default EventBind
