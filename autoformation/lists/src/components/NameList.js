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
    // const heroList = heroes.map(hero => 
    //    <HeroList hero={hero} ></HeroList>
    //    )





       //lists and keys
    const heroList = heroes.map(hero => 
    //    <HeroList key = "unique" hero={hero} ></HeroList>        //unique: every item rendered will have the same value for the key problem
    //    <HeroList key = {hero.id} hero={hero} ></HeroList>       //id is unique key prop value
       <HeroList key = {hero.ability} hero={hero} ></HeroList>         //the keeper of value don't need to be id all the time, it can be anything as long as its a unique within the list
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




        {/* lists and keys */}

    </div>
  )
}

export default NameList

