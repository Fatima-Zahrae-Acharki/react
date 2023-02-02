import React from 'react'

function HeroList({hero}) {
  return (
    <div> 
        <ul>
            <ul><b><u>hero name</u> :</b> {hero.name},</ul>
            <ul><b><u>his age</u> : </b>{hero.age} YO,</ul>
            <ul><b><u>his ability</u> : </b>{hero.ability}</ul> 
        </ul>
    </div>
  )
}

export default HeroList