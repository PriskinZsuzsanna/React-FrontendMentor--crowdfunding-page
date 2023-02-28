import './App.css';
import HeroMobile from './components/HeroMobile.js'
import HeroDesktop from './components/HeroDesktop.js'
import Container from './components/Container.js'
import Nav from './components/Nav.js'

import heroMobileImg from './images/image-hero-mobile.jpg'
import heroDesktopImg from './images/image-hero-desktop.jpg'

import { useRef } from 'react'
import Modal from './components/Modal';

function App() {

  const text = {
    header: [
      {
        headerTitle: "Mastercraft Bamboo Monitor Riser",
        headerParag: "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
        headerButton: "Back this project",
        bookmark: "Bookmark"
      }
    ],
    numbers: [
      {
        number: "89,914",
        text: "of $100,000 backed"
      },
      {
        number: "5,007",
        text: "total backers"
      },
      {
        number: "56",
        text: "days left"
      }
    ],
    percent: [
      { percent: 89 }
    ],
    about: [
      {
        title: "About this project",
        text1: "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
        text2: "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."
      }
    ],
    boxCards: [
      {
        cardName: "Bamboo Stand",
        pledge: "Pledge $25 or more",
        details: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        left: "101 ",
        available: true,
        button: "Select Reward"
      },
      {
        cardName: "Black Edition Stand",
        pledge: "Pledge $75 or more",
        details: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left: "64 ",
        available: true,
        button: "Select Reward"
      },
      {
        cardName: "Mahogany Special Edition",
        pledge: "Pledge $200 or more",
        details: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left: "0 ",
        available: false,
        button: "Out of Stock"
      }
    ]

  }

  const appRef = useRef()

  return (
    <div className="App" ref={appRef}>
        <Nav 
        appRef={appRef}
        />
        <HeroMobile
          heroMobileImg={heroMobileImg}
        />
        <HeroDesktop
          heroDesktopImg={heroDesktopImg}
        />
        <Container
          text={text}
          appRef={appRef}
        />
    </div>
  );
}

export default App;
