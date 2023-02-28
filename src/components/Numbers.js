import './Numbers.css'
import NumbersBox from './NumbersBox'
import Range from './Range'

import React from 'react'

const Numbers = ({ textNumbers, textPercent }) => {

  const percent = textPercent[0].percent

  return (
    <section className='numbers'>
      <div className="number-boxes">
        {textNumbers.map((numberBox) => (
          <NumbersBox
            number={numberBox.number}
            text={numberBox.text}
            key={numberBox.text}
          />
        ))}
      </div>
      <Range
        percent={percent}
      />

    </section>
  )
}

export default Numbers