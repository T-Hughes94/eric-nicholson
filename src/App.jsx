import { useState } from 'react'
import './index.css';
import SideNav from './components/SideNav'
import Main from './components/Main'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'


function App() {
  

  return (
    <>
    <SideNav/>
    <Main/>
    <AboutMe/>
    <Experience/>
    </>
  )
}

export default App
