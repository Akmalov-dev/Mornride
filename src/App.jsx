import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Offline from './components/Main/Offline/Offline';

import Header from '../src/components/Header/header'
import Timmeles from './components/Main/Timmeles/Timmeles';

function App() {

  return (
    <>
     <header>
         <Header/>
     </header>
     <main>
    <Timmeles/>
     <Offline/>
     </main>
    </>
  )
}

export default App
