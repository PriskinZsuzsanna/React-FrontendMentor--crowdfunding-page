import './Modal.css'
import ModalClose from '../images/icon-close-modal.svg'

import { useRef} from 'react'
import ModalBox from './ModalBox'



const Modal = ({ modal, onClose, appRef, }) => {

    const modalBoxRef = useRef()
    const modal2BoxRef = useRef()

    const gotIt = () => {
        modalBoxRef.current.classList.add('d-none')
    }


    if (!modal) return null
    return (
        <div className="overlay">

            <div ref={modal2BoxRef} className="modal2 d-none">
                <div className="thank-circle"></div>
                <h3>Thanks for your support!</h3>
                <p> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.
                </p>
                <button onClick={gotIt} className='btn'><a href="/">Got it!</a></button>
            </div>



            <div ref={modalBoxRef} className="modal">
                <div className="close-modal-div">
                    <button onClick={onClose} className="close-modal"><img src={ModalClose} alt="" /></button>
                </div>
                <div className="modal-text">
                    <h3>Back this project</h3>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                    <ModalBox
                        key="0"
                        noPledge="Pledge with no reward"
                        pledge="0"
                        details="Choose to support us without a reward if you simply believe in our project. As a backer,
                     you will be signed up to receive product updates via email."
                        available={true}
                        appRef={appRef}
                        modalBoxRef={modalBoxRef}
                        modal2BoxRef={modal2BoxRef}
                        onClose={onClose}

                    />
                    <ModalBox
                        key="1"
                        pledgeText="Pledge $25 or more"
                        pledge="25"
                        title="Bamboo Stand"
                        details=" You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                     you’ll be added to a special Backer member list."
                        left={101}
                        span="left"
                        available={true}
                        appRef={appRef}
                        modalBoxRef={modalBoxRef}
                        modal2BoxRef={modal2BoxRef}
                        onClose={onClose}

                    />
                    <ModalBox
                        key="2"
                        pledgeText="Pledge $75 or more"
                        pledge="75"
                        title="Black Edition Stand"
                        details="Choose to support us without a reward if you simply believe in our project. As a backer,
                     you will be signed up to receive product updates via email."
                        left={64}
                        span="left"
                        available={true}
                        appRef={appRef}
                        modalBoxRef={modalBoxRef}
                        modal2BoxRef={modal2BoxRef}
                        onClose={onClose}

                    />
                    <ModalBox
                        key="3"
                        title="Mahogany Special Edition"
                        pledgeText="Pledge $200 or more"
                        details="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
                        left={0}
                        span="left"
                        available={false}
                        modalBoxRef={modalBoxRef}
                        modal2BoxRef={modal2BoxRef}
                    />



                </div>
            </div>



        </div>
    )
}

export default Modal
