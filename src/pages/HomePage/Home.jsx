import React from 'react'
import Hero from './Hero'
import Cards from './Cards'

const Home = ({setInput, input, setCurrentCategory}) => {

    return (
        <>
        <Hero setInput={setInput} setCurrentCategory={setCurrentCategory} input={input}/> 
        <Cards/>
        
        </>
        
    )
}

export default Home
