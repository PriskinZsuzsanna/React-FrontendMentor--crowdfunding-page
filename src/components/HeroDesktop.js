import './HeroDesktop.css'

import React from 'react'

const HeroDesktop = ({heroDesktopImg}) => {
  return (
    <div className='hero-desktop' style={{backgroundImage: `url("${heroDesktopImg}")`}}>
    
    </div>
  )
}

export default HeroDesktop