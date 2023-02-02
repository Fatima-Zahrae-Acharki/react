import React from 'react'
import HeroList from './HeroList'


//repeat some html for each item in the list
function NameList() {
    //1
    // const names = ['midoriya', ' todoroki', ' bakugo',]
    //2
    // const nameList = names.map(name => <h2>{name}</h2> )//map() takes in a function as an argument that we will be using an arrow function

    //3
    const heroes = [
        {
            id:1,
            name:'midoriya',
            age:15,
            ability:'one for all'
        },
        {
            id:2,
            name:' todoroki',
            age:16,
            ability:'half cold half hot'
        },
        {
            id:3,
            name:' bakugo',
            age:15,
            ability:'explosions'
        }
    ]
    const heroList = heroes.map(hero => 
       <HeroList hero={hero} ></HeroList>
       )
  return (
    <div>
        {/* 1 */}

        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2 ]}</h2> */}

        {/* 2 */}

        {/* {
        <div>{nameList}</div>
        } */}

        {/* 3 */}
         {
        <div>{heroList}</div>
        } 

    </div>
  )
}

export default NameList

