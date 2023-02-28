import './Box.css'
import './ModalBox.css'
import Button from './Button'

import React from 'react'

const Box = ({ title, pledge, details, left, available, button, appRef }) => {

  const btn = "btn"

  return (
    <div className="boxes">
      {available &&
        <div className="box available">
          <div className="d-flex">
            <h4 className="title">{title}</h4>
            <h4 className="pledge">{pledge}</h4>
          </div>

          <p>{details}</p>

          <div className="d-flex">
            <div className="left-div">
              <h1 className="left">{left}</h1>
              <span>left</span>
            </div>
            <Button
              buttonText={button}
              btnClassName={btn}
              appRef={appRef}
            />
          </div>

        </div>}
      {!available &&
        <div className="box not-available">
          <div className="d-flex">
            <h4 className="title">{title}</h4>
            <h4 className="pledge">{pledge}</h4>
          </div>

          <p>{details}</p>

          <div className="d-flex">
            <div className="left-div">
              <h1 className="left">{left}</h1>
              <span>left</span>
            </div>
            <Button
              buttonText={button}
              btnClassName={btn}
            />
          </div>
        </div>}


    </div>

  )
}

export default Box