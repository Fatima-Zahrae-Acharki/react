import React from 'react'


//repeat some html for each item in the list
function NameList() {
    const names = ['midoriya', 'todoroki', 'bakugo',]
  return (
    <div>
        <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2 ]}</h2>
    </div>
  )
}

export default NameList

