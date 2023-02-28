import './Nav.css'

import logo from '../images/logo.svg'
import open from '../images/icon-hamburger.svg'
import close from '../images/icon-close-menu.svg'

import { useRef, useState } from 'react'


const Nav = ({ appRef }) => {

  const closeRef = useRef()
  const menuiconRef = useRef()
  const menuRef = useRef()
  const navModalRef = useRef()

  const [navModal, setNavModal] = useState(false);


  const openNavModal = (e) => {
    e.preventDefault()
    setNavModal(!navModal);
    document.querySelector('.container').classList.add('opace')
    navModalRef.current.classList.remove('d-none')
    menuiconRef.current.classList.add('d-none')
    closeRef.current.classList.remove('d-none')
  };

  const closeNavModal = () => {
    setNavModal(false)
    navModalRef.current.classList.add('d-none')
    document.querySelector('.container').classList.remove('opace')
    menuiconRef.current.classList.remove('d-none')
    closeRef.current.classList.add('d-none')
  }


  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul ref={menuRef} >
        <li><a href="/React-FrontendMentor--crowdfunding-page"> About</a></li>
        <li><a href="/React-FrontendMentor--crowdfunding-page">Discover</a></li>
        <li><a href="/React-FrontendMentor--crowdfunding-page">Get Started</a></li>
      </ul>
      <div ref={closeRef} onClick={closeNavModal} className="close d-none">
        <img src={close} alt="" />
      </div>
      <div ref={menuiconRef} onClick={openNavModal} className="hamburger">
        <img src={open} alt="" />
      </div>


      <ul ref={navModalRef} className="nav-modal-ref d-none">
        <li><a href="/React-FrontendMentor--crowdfunding-page"> About</a></li>
        <li><a href="/React-FrontendMentor--crowdfunding-page">Discover</a></li>
        <li><a href="/React-FrontendMentor--crowdfunding-page">Get Started</a></li>
      </ul>


    </nav>
  )
}

export default Nav