import React from 'react'
import Hero from './Hero'
import Cards from './Cards'

const Home = ({setInput, places, input, setCurrentCategory}) => {

    return (
        <>
        <Hero setInput={setInput} places={places} setCurrentCategory={setCurrentCategory} input={input}/> 
        <Cards/>
        
        </>
        
    )
}

export default Home
