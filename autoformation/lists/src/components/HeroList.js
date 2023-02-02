import React from 'react'

function HeroList({hero}) {
  return (
    <div> 
        <li>
            <ul><b><u>hero name</u> :</b> {hero.name},</ul>
            <ul><b><u>his age</u> : </b>{hero.age} YO,</ul>
            <ul><b><u>his ability</u> : </b>{hero.ability}</ul> 
        </li>
    </div>
  )

  //the key props are not accessible in the child components
}

export default HeroList