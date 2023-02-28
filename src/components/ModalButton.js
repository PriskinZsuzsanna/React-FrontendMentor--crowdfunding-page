import {useState} from 'react'


const ModalButton = ({modalBoxRef, modal2BoxRef,}) => {

  const [modal2, setModal2] = useState(false);
  
  const openModal2 = (e) => {
      e.preventDefault()
      setModal2(!modal2);
      modalBoxRef.current.classList.add('d-none')
      modal2BoxRef.current.classList.remove('d-none')
  };

  return (
    <div>
      <button className="modal-btn" onClick={openModal2}><a href="/">Continue</a></button>
    </div>
  )
}

export default ModalButton
