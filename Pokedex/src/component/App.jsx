import { useState } from 'react'
import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import Hero from './Hero'
import Search from './Search'

function App() {
  
  return (
    <div>
      <div id="PokedexTitle"><Hero/></div>
      <div id="search"><Search/></div>
      <div id="display"></div>
    </div>
  )
}

export default App
