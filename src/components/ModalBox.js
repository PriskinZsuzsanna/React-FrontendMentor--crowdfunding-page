import './ModalBox.css'

import { useRef } from 'react'
import ModalButton from './ModalButton'

const ModalBox = ({ title, pledge, noPledge, pledgeText, details, left, span, available, appRef, modalBoxRef, modal2BoxRef, onClose }) => {

    const continueRef = useRef()
    const clickRef = useRef()
    const modalRef = useRef()

    const continueClick = () => {
        continueRef.current.classList.remove('d-none')
        clickRef.current.classList.add('clicked')
        modalRef.current.classList.add('border')
    };

    return (
        <div className="modal-boxes-inner">

            {available &&
                <div ref={modalRef} className="modal-box available">
                    <div onClick={continueClick} className="title">
                        <div className="title-left">
                            <div ref={clickRef} className="circle"></div>
                            <div className="titles">
                                <h3 className="title1">{title}</h3>
                                <h3 className="no-pledge">{noPledge}</h3>
                                <h3 className="pledge">{pledgeText}</h3>
                            </div>
                        </div>
                        <div className="left-div desktop">
                            <h1 className="left">{left}</h1>
                            <span>{span}</span>
                        </div>
                    </div>
                    <p className="details">{details}</p>
                    <div className="left-div mobile">
                        <h1 className="left">{left}</h1>
                        <span>{span}</span>
                    </div>

                    <div ref={continueRef} className="d-none continue-div">
                        <p className="text-center">Enter your pledge</p>
                        <div className="modal-box-buttons">
                            <div className="dollar" contentEditable><span className='span'>$</span>{pledge}</div>
                            <ModalButton
                                appRef={appRef}
                                modalBoxRef={modalBoxRef}
                                modal2BoxRef={modal2BoxRef}
                                onClose={onClose}

                            />
                        </div>
                    </div>
                </div>}
            {!available &&
                <div className="modal-box not-available" >
                    <div className="title">
                        <div className="title-left">
                            <div className="circle"></div>
                            <div className="titles">
                                <h3>{title}</h3>
                                <h3 className="pledge">{pledgeText}</h3>
                            </div>
                        </div>
                        <div className="left-div desktop">
                            <h1 className="left">{left}</h1>
                            <span>{span}</span>
                        </div>
                    </div>
                    <p className="details">{details}</p>
                    <div className="left-div mobile">
                        <h1 className="left">{left}</h1>
                        <span>{span}</span>
                    </div>
                </div>}
        </div>)
}

export default ModalBox
