import './Button.css'
import {useState} from 'react'

import React from 'react'
import Modal from './Modal';
import Modal2 from './Modal2';

const Button = ({buttonText, btnClassName, appRef}) => {

  const [modal, setModal] = useState(false);
  

  const openModal = (e) => {
      e.preventDefault()
      setModal(!modal);
      appRef.current.classList.add('modal-open')
  };

  const closeModal = () => {
    setModal(false)
   
    appRef.current.classList.remove('modal-open')
  }

  return (
    <div>
      <button onClick={openModal} className={btnClassName}><a href="/">{buttonText}</a></button>
      <Modal
      modal={modal}
      onClose={closeModal}
      appRef={appRef}/>
      <Modal2
      />
      
    </div>
    )
}

export default Button
