import React, { useEffect, useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/HomePage/Home'
import About from './pages/AboutPage/About'
import CardDetails from './pages/CardDetailsPage/CardDetails'
import Contact from './pages/ContactPage/Contact'
import Nav from './pages/HomePage/Nav'
import Footer from './pages/HomePage/Footer'
import Map from './pages/map/Map'
import GetLocationView from './view-model/GetLocationView'
import GetLandmarkView from './view-model/GetLandmarkView'


export const MyLocation = createContext()


const App = () => {
  const [places, setPlaces] = useState([]);
  const [card, setCard] = useState({id:""});
  const [allPlaces, setAllPlaces] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory ] = useState('Select Option')
  

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
    });
    setCurrentCategory(catItem)
    setPlaces(result)
}

  const settingCard = (cardId) => {
    GetLandmarkView().then((res) => res.json()).log();
    console.log(cardId);
    setCard({id: cardId});
  }


  return (
    <>
      <MyLocation.Provider value={{ category, places, card, settingCard, allPlaces, filterData, currentCategory}}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/card-details' element={<CardDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/map' element={<Map />} />
        </Routes>
        <Footer />
      </MyLocation.Provider>
    </>
  )
}

export default App
