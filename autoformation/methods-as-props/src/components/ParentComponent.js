import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    //defining the component
    greetParent(){
        //regular concatenation
        // alert('hello' + this.state.parentName)
        //es6
        // alert(`hello ${this.state.parentName}`)
        alert(`hello ${this.state.parentName} from ${childName}`)
    }
    
  render() {
    return (
      <div>
        {/* pass the method as prop */}
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
