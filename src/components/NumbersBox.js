import './NumbersBox.css'

import React from 'react'

const NumbersBox = ({number, text}) => {
  return (
    <div className="number-box">
      <h2><span>$</span>{number}</h2>
      <p>{text}</p>
    </div>
  )
}

export default NumbersBox
