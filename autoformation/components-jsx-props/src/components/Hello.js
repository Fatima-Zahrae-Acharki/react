import React from "react";


//jsx varsion
const Hello = () => {
    // return (
    //     <div className="yo">
    //         <h1>Hello, world!</h1>
    //     </div>
    // );


//without JSX
    return React.createElement(
        'div',
        {id: 'hello', className: 'yo'},//class replaced by className
        React.createElement('h3', null, 'without JSX'))

}


export default Hello;
