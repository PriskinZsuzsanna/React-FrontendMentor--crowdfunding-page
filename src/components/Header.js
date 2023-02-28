import './Header.css'
import bookmarkIcon from '../images/icon-bookmark.svg'

import Button from './Button'

import React from 'react'

const Header = ({ textHeader, appRef }) => {

    const buttonText= textHeader[0].headerButton
    const btn = "btn"
    const bookmarkBtn = "bookmark-btn"

    return (
        <section className='header'>
            <h1>{textHeader[0].headerTitle}</h1>
            <p>{textHeader[0].headerParag}</p>
            <div className="header-buttons">
                <Button 
                buttonText={buttonText}
                btnClassName={btn}
                appRef={appRef}
                    />
                <div className="bookmark-btns">
                    <button className="bookmark-icon"><a href=""><img src={bookmarkIcon} alt="" /></a></button>
                    <Button 
                    buttonText={textHeader[0].bookmark}
                    btnClassName={bookmarkBtn}
                    appRef={appRef}
                    />
                </div>
            </div>
        </section>
    )
}

export default Header