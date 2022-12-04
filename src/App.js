import React, { useEffect, useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import About from './pages/AboutPage/About'
import Contact from './pages/ContactPage/Contact'
import Nav from './pages/HomePage/Nav'
import Footer from './pages/HomePage/Footer'
import Map from './pages/map/Map'
import GetLocationView from './view-model/GetLocationView'
import GetLandmarkView from './view-model/GetLandmarkView'
import OnePlace from './pages/HomePage/OnePlace'

export const MyLocation = createContext()

const App = () => {
  const [places, setPlaces] = useState([]);
  const [allPlaces, setAllPlaces] = useState([]);
  const [category, setCategory] = useState([]);
  const [landmark, setLandmark] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('Select option')
  const [input, setInput] = useState('')
  


  useEffect(() => {
    GetLocationView().then((locations) => {
      setPlaces(locations)
      setAllPlaces(locations)
      
      const allCategories = [...new Set(locations.map((curEle) => curEle.attributes.category))]
      setCategory(allCategories);
    })

    GetLandmarkView().then((landmark) => {
      setLandmark(landmark)
    })
  }, [])


  function filterData(catItem) {
    const result = allPlaces.filter((curItem) => {
      return curItem.attributes?.category?.toLowerCase() === catItem?.toLowerCase()
    })
    const filterLocation = result.filter((loc)=>{
      return loc.attributes?.sub_urban?.toLowerCase() === input?.toLowerCase()
    })
    setCurrentCategory(catItem)
    setPlaces(filterLocation)
  }

  return (
    <>
      <MyLocation.Provider value={{ category, places, landmark, allPlaces, input, setCurrentCategory, setInput, filterData, currentCategory }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home input={input} setInput={setInput} places={places} setCurrentCategory={setCurrentCategory} allPlaces={allPlaces} />} />
          <Route path='/about' element={<About />} />
          <Route path='/places/:id' element={<OnePlace/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/map' element={<Map/>} />
        </Routes>
        <Footer />
      </MyLocation.Provider>
    </>
  )
}

export default App
