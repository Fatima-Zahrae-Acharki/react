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


    // return (
    //   <div>
    //     <div>welcome kirby</div>
    //     <div>welcome guest</div>
    //   </div>
      
    // )


        /////////////declare variable inside render

    // let message //stores the element to be rendered
    // if(this.state.isLoggedIn) {
    //     message = <div>welcome kirby</div>
    // }else{
    //     message = <div>welcome guest</div>
    // }
    // return <div>{message}</div>



    /////////ternary conditional operator (can be used inside jsx (simple))

    // return(
    //     this.state.isLoggedIn ? //if true, return:
    //     <div>welcome kirby</div> : //else 
    //     <div>welcome guest</div>
    // )


    //short circuit operator (specific case of the ternary conditional operator above)
        return this.state.isLoggedIn && <div>welcome kirby</div>
  }
}

export default UserGreeting
