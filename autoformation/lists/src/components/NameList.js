import React from 'react'


//repeat some html for each item in the list
function NameList() {
    const names = ['midoriya', ' todoroki', ' bakugo',]
    const nameList = names.map(name => <h2>{name}</h2> )//map() takes in a function as an argument that we will be using an arrow function
  return (
    <div>
        {/* 1 */}

        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2 ]}</h2> */}

        {/* 2 */}

        {
        <div>{nameList}</div>
        }
    </div>
  )
}

export default NameList

