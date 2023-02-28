import './Range.css'

import React from 'react'

const Range = ({percent}) => {
    
  return (
    <div className="range">
      <div className="range-after" style={{width: `${percent}%`}}></div>
    </div>
  )
}

export default Range
