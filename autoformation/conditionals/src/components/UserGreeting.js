import React, { Component } from 'react'


class UserGreeting extends Component {


    //if else
    //jsx inside if else

    constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:false //will return welcome guest
    //    isLoggedIn:true  //will return welcome kirby
    }
  }
  render() {

        //////////////normal condition

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>welcome kirby</div>
        //     )
        // } else{
        //     return(
        //         <div>welcome guest</div>
        //     )
        // }


    return (
      <div>
        <div>welcome kirby</div>
        <div>welcome guest</div>
      </div>
      
    )


}

export default UserGreeting
