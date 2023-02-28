import './Modal2.css'

import React from 'react'

const Modal2 = ({ modal2, modalBoxRef, modal2BoxRef }) => {

    
    const gotIt = () => {
        modalBoxRef.current.classList.add('d-none')
    }

    if (!modal2) return null
    return (

       
            <div ref={modal2BoxRef} className="modal2 d-none">
                <div className="thank-circle"></div>
                <h3>Thanks for your support!</h3>
                <p> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.
                </p>
                <button onClick={gotIt}  className='btn'><a href="/">Got it!</a></button>
            </div>
    


    )
}

export default Modal2
