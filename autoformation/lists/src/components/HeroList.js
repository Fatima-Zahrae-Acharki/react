import React from 'react'

function HeroList({hero, key}) {
  return (
    <div>
        <h2>
            {key}<b><u>hero name</u> :</b> {hero.name},
            <b><u>his age</u> : </b>{hero.age} YO,
            <b><u>his ability</u> : </b>{hero.ability}
        </h2> 
        
    </div>
  )

  //index as key anti pattern

  


  //key is a special string attribute you need to include when creating lists of elements
  //the key props are not accessible in the child components
  //keys helps react identify which items in a list have changed or added or removed /give elements a stable identity
  //have a crutial role in handling ui updates efficiently
}

export default HeroList