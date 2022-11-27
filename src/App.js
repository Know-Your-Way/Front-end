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
  const [currentCategory, setCurrentCategory] = useState('')
  const [input, setInput] = useState('')




  useEffect(() => {
    GetLocationView().then((locations) => {
      let filterLocations = locations
      if (input) {
        filterLocations = filterLocations.filter((item) => {
          return input.toLowerCase() === item.attributes.sub_urban.toLowerCase()
        })
      }
      
      if (currentCategory) {
        filterLocations = filterLocations.filter((item) => {
          console.log(item, '36')
          
          return currentCategory.toLowerCase() === item.attributes.category.toLowerCase()
        })
      }
      setPlaces(filterLocations);
      setAllPlaces(filterLocations)
      
      console.log(filterLocations, 'filterLocations')

      const allCategories = [...new Set(locations.map((curEle) => curEle.attributes.category))]
      console.log(allCategories, 'all')
      setCategory(allCategories);
      // landmark 
      GetLandmarkView().then((landmark) => {
        setLandmark(landmark)
      })
    }).catch((err) => {
      console.log(err)
    })
  }, [input, currentCategory ])


  const filterData = (catItem) => {
    const result = allPlaces.filter((curItem) => {
      return curItem.attributes.category === catItem;
    });
    setCurrentCategory(catItem)
    setPlaces(result)
  }




  return (
    <>
      <MyLocation.Provider value={{ category, places, landmark, allPlaces, setCurrentCategory, setInput, filterData, currentCategory }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home input={input} setInput={setInput} setCurrentCategory={setCurrentCategory} />} />
          <Route path='/about' element={<About />} />
          <Route path='/places/:id' element={<OnePlace />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/map' element={<Map />} />
        </Routes>
        <Footer />
      </MyLocation.Provider>
    </>
  )
}

export default App
