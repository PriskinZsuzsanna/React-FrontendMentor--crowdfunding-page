import './Container.css'

import containerLogo from '../images/logo-mastercraft.svg'
import Header from './Header'
import Numbers from './Numbers'
import About from './About'


import React from 'react'
import Modal from './Modal'

const Container = ({text, appRef}) => {

  const textHeader = text.header
  const textNumbers = text.numbers
  const textPercent = text.percent
  const textAbout = text.about
  const textBoxes = text.boxCards

  return (
    <div className='container'>
      <div className="container-logo">
        <img src={containerLogo} alt="" />
      </div>
      <Header 
      textHeader={textHeader}
      appRef={appRef}
      />
      <Numbers 
      textNumbers={textNumbers}
      textPercent={textPercent}/>
      <About 
      textAbout={textAbout}
      textBoxes={textBoxes}
      appRef={appRef}
      />

    </div>
  )
}

export default Container