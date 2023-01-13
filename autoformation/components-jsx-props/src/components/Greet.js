import React from 'react'   //JSX translates into react.createElement 


//functional components


// function Greet() {
//   return (
//     <div>functional component</div>
//   )
// }


// es6

// const Greet = () => <h1>functional component 2</h1>



//props
const Greet = (props) => {
    console.log(props)
    return( 
        <div>
        <h1>name {props.name} is: {props.role}</h1>
        {props.children}
        </div>
    )
}




export default Greet