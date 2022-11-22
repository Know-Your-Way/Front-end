import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/HomePage/Home'
import About from './pages/AboutPage/About'
import Contact from './pages/ContactPage/Contact'
import Nav from './pages/HomePage/Nav'
import Footer from './pages/HomePage/Footer'
import Map from './pages/map/Map'


const App = () => {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/map' element={<Map/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
