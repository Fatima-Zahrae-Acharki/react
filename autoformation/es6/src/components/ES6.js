import React, { Component } from "react";   // modules 

function ES6() {
  //ES6 classes examples
  class Animals {
    constructor(type, color, gender) {
      this.type = type;
      this.color = color;
      this.gender = gender;
    }
    animalInfo() {
      return "This animal is a : " + this.color + this.gender + this.type;
    }
  }
  class Pet extends Animals {
    constructor(type, color, gender, home) {
      super(type, color, gender);
      this.home = home;
    }
    petInfo() {
      return this.animalInfo() + ", and it's from" + this.home;
    }
  }
  const info = new Pet(" cat", " white ", " male ", " Russia ");
//   console.log(info.animalInfo());
//   console.log(info.petInfo());

//   document.write(info.petInfo());

//   return <div>{info.petInfo()}</div>;
//   return <div>pooo</div>;




//arrow function


//normal function
// function box(A,B){
//     return A + B
// }


//arrow function with return and argument
// const calc = (A, B) => {
//     return A + B;
// }


//arrow function without return and argument
const calc = (A, B) => A + B ;



// variables 
      
const event = 'raining' //can't be changed
var time = '14h' //u can change it
var people = ['cerie', 'geralt','yennifer','triss']
let show = true 


// if(show) {
//   document.write('<br/> It was ' + event + ' at ' + time);
// }

// map array method example 

const array1 = people.map((event) =>  <li>{event}</li>)  //map: take an argument (loop the objects in array)
//forEach(event => {event});



//Destructuring   get elements from an array /class arguents of objects

const infos = {
  name: 'Ichigo Kurusaki',
  age: 20 ,
  role: 'Shinigami'
}

const {name, age, role} = infos


//arrays
const hashiras = ['tanjirou', ' tengen', ' gyuu', ' mitsuri', ' iguru',  ' rengoku', ' shinobu']
const deaths = ['mitsuri', ' iguru',  ' rengoku', ' shinobu']

//spread operators (array inside array)

const all = [...hashiras, ...deaths] 




//Ternary Operator

// var element = true
// function isTrue(){
//   return 'it is true'
// }

// function isntTrue(){
//   return 'it is false'
// }
 
// element ? isTrue() : isntTrue();



//modules

//in-line

// export const name = "kirby"
// export const age = 21

//all at once

// const name = "kirby"
// const age = 22

// export { name, age }





 return(
    <div>
        <div>{info.petInfo()}</div>
        <div>{calc(10,30)}</div>
        <div>{hashiras}</div>
        <div>{deaths}</div>
        <div>{all}</div>
        <div>{array1}</div>
        <div>
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{role}</li>
          </ul>
        </div>
    </div>
 )





}

export default ES6;     //modules
