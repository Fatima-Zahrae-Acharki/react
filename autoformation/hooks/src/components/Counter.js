import React, { Component } from 'react'

class Counter extends Component {
   //set state 
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        //with state: it won't work in the jsx but will appear in console
        
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)


        // with setState
        
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('callback value', this.state.count )} )
        console.log(this.state.count)


        // this.setState((prevState )=> ({
        //     count: prevState.count + 1
        // }))
        // console.log(this.state.count)


        // this.setState((prevState, props )=> ({
        //     count: prevState.count + props
        // }))
        // console.log(this.state.count)

    }
    
  render() {
    return (
      <div>
        <div>
            count - {this.state.count}
        </div>
        <button onClick={()=>this.increment()} >+</button>
      </div>
    )
  }
}

export default Counter
