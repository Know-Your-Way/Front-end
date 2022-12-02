import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import Places from './Places'

const Home = ({setInput, places, allPlaces, input, setCurrentCategory}) => {

    return (
        <>
        <Hero setInput={setInput} places={places} setCurrentCategory={setCurrentCategory} input={input} allPlaces={allPlaces}/> 
        <Cards/>
        <Places/>   
        </>
        
    )
}

export default Home
