import React, { useEffect, useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/HomePage/Home'
import About from './pages/AboutPage/About'
import Contact from './pages/ContactPage/Contact'
import Nav from './pages/HomePage/Nav'
import Footer from './pages/HomePage/Footer'
import Map from './pages/map/Map'
import GetLocationView from './view-model/GetLocationView'


export const MyLocation = createContext()


const App = () => {
  const [places, setPlaces] = useState([]);
  const [allPlaces, setAllPlaces] = useState([]);
  const [category, setCategory] = useState([]);
  

  useEffect(() => {
      GetLocationView().then((locations)=>{
        setPlaces(locations);
        setAllPlaces(locations);
        const allCategories = [...new Set(locations.map((curEle) => curEle.attributes.category))]
        setCategory(allCategories);
      }).catch((err) => {
        console.log(err)
      })
  }, [])


  const filterData = (catItem) => {
    const result = allPlaces.filter((curItem) => {
        return curItem.attributes.category === catItem;
    })
    setPlaces(result)
}


  return (
    <>
      <MyLocation.Provider value={{ category, places, allPlaces, filterData }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/map' element={<Map />} />
        </Routes>
        <Footer />
      </MyLocation.Provider>
    </>
  )
}

export default App
