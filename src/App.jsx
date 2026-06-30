import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Offline from './components/Main/Offline/Offline';

import Header from '../src/components/Header/header'
import Timmeles from './components/Main/Timmeles/Timmeles';
import Discover from './components/Main/Discover/Discover'

function App() {

  return (
    <>
     <header>
         <Header/>
     </header>
     <main>
    <Timmeles/>
     <Offline/>
     <Discover/>
     </main>
    </>
  )
}

export default App
