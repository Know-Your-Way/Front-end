import React from 'react'
import Hero from './Hero'
import Cards from './Cards'

const Home = ({setInput, places, setPlaces, location, input, setCurrentCategory}) => {

    return (
        <>
        <Hero setInput={setInput} places={places} setPlaces={setPlaces} setCurrentCategory={setCurrentCategory} input={input} location={location}/> 
        <Cards/>
        
        </>
        
    )
}

export default Home
