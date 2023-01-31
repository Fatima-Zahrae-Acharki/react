import React from 'react'

function ChildComponent(props) {
  return (
    <div>
         {/* <button onClick={props.greetHandler} >Greet Parent</button> */}

        {/* arrow function */}
        {/* props object and pass parameter () */}
        <button onClick={() => props.greetHandler('child')} >Greet Parent</button>
    </div>
  )
}

export default ChildComponent