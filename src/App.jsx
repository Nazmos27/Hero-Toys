import { useState } from 'react'
import './App.css'
import NavBar from './Components/Shared/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Shared/Footer'

function App() {
  

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>


    </>
  )
}

export default App
