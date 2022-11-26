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
  const [card, setCard] = useState({id:"", imagePath:"", title: "", description: "", phone:"", email:"", website:""});
  const [allPlaces, setAllPlaces] = useState([]);
  const [category, setCategory] = useState([]);
  const [landmark, setLandmark] = useState([]);
  const [currentCategory, setCurrentCategory ] = useState('Select Option')
  const baseApi = 'http://localhost:1337';
  

  useEffect(() => {
    GetLandmarkView().then((landmarkRes)=>{
      setLandmark(landmarkRes);
      console.log("Landmark Res", landmarkRes);
    }).catch((err) => {
      console.log(err)
    })
  }, [])

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
    const result = landmark.filter((dataItem) => {
      console.log(dataItem);
      return dataItem.id === Number(cardId);
    });

    console.log(cardId);
    console.log(result[0]);
    const res = result[0].attributes;
    console.log(baseApi+res.ImageUrl);
    setCard({id: cardId, imagePath: baseApi+res.ImageUrl, 
      title: res.Title, description: res.Description,
      phone: res.Phone, email: res.Email, website: res.Website});
  }


  return (
    <>
      <MyLocation.Provider value={{ category, places, card, landmark, settingCard, allPlaces, filterData, currentCategory}}>
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
