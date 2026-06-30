import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';


import Header from '../src/components/Header/header'
import Timmeles from './components/Main/Timmeles/Timmeles';
import Discover from './components/Main/Discover/Discover'
import Offline from './components/Main/Offline/Offline';
import Grab from './components/Grab/Grab';
import Footer from "./components/Footer/footer"
function App() {

  return (
    <>
     <header>
         <Header/>
     </header>
     <main>
    <Timmeles/>
     
     <Discover/>
     <Offline/>
     <Grab/>
     </main>
     <Footer/>
    </>
  )
}

export default App
