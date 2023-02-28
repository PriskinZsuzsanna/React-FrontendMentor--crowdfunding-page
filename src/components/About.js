import './About.css'
import Box from './Box'

import React from 'react'

const About = ({ textAbout, textBoxes, appRef }) => {

  const aboutText = textAbout[0]

  return (
    <section className='about'>
      <div className="about">
        <h2>{aboutText.title}</h2>
        <p>{aboutText.text1}</p>
        <p>{aboutText.text2}</p>
      </div>
      <div className='boxes'>
        {textBoxes.map((box) => (
          <Box 
          key={box.cardName}
          title={box.cardName}
          pledge={box.pledge}
          details={box.details}
          left={box.left}
          available={box.available}
          button={box.button}
          appRef={appRef}
          />

        ))}

      </div>
    </section>
  )
}

export default About