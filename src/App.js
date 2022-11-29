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
import { ToastContainer } from 'react-toastify'

export const MyLocation = createContext()

const App = () => {
  const [places, setPlaces] = useState([]);
  const [allPlaces, setAllPlaces] = useState([]);
  const [location, setLocation] = useState([])
  const [category, setCategory] = useState([]);
  const [landmark, setLandmark] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('')
  const [input, setInput] = useState('')


  useEffect(() => {
    GetLocationView().then((locations) => {
      setLocation(locations)
      let filterLocations = locations
      if (input) {
        console.log(input, 'input')
        if (input) {
          filterLocations = filterLocations.filter((item) => {
            return input.toLowerCase() === item.attributes.sub_urban.toLowerCase()
          })
        }
      }
      // console.log(filterLocations, '41')
      setPlaces(filterLocations)
      setAllPlaces(filterLocations)
      setPlaces(location)

      const allCategories = [...new Set(locations.map((curEle) => curEle.attributes.category))]
      setCategory(allCategories);
    })

    GetLandmarkView().then((landmark) => {
      setLandmark(landmark)
    })
  }, [currentCategory])

  useEffect(() => {
    setPlaces(location)
  }, [input])


  function filterData(catItem) {
    const result = allPlaces.filter((curItem) => {
      return curItem.attributes.category === catItem
    })
    setCurrentCategory(catItem)
    setPlaces(result)
  }




  return (
    <>
      <MyLocation.Provider value={{ category, places, landmark, allPlaces, input, setCurrentCategory, setInput, filterData, currentCategory }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home input={input} setInput={setInput} places={places} setCurrentCategory={setCurrentCategory} />} />
          <Route path='/about' element={<About />} />
          <Route path='/places/:id' element={<OnePlace/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      
        <Footer />
      </MyLocation.Provider>
    </>
  )
}

export default App
