import './HeroMobile.css'


import React from 'react'

const HeroMobile = ({heroMobileImg}) => {
  return (
    <div className='hero-mobile' style={{backgroundImage: `url("${heroMobileImg}")`}}>
      
    </div>
  )
}

export default HeroMobile