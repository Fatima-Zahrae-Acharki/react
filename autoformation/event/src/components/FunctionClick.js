import React from 'react'


//eventHandler is a function and not a function caller (dont call it with parenthesies)

function FunctionClick() {
  
    function clickHandler(){
        console.log('clickHandler hhhhhh');
        alert("(❤ω❤)");
    }
  return (
    <div>
        <button onClick={clickHandler} >Click</button>
    </div>
  )
}

export default FunctionClick