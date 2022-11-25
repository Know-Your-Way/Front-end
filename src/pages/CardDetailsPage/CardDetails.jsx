import React from 'react'
import { MyLocation } from "../../App";
import { useContext } from "react";


const CardDetails = () => {
    const { card } = useContext(MyLocation);

    console.log(card.id);
    return (
      <section className=" bg-neutral-800 text-gray-600 body-font">
        <div className="container mx-auto ">
          <div className='flex px-5 pt-16 md:flex-row flex-col items-center'>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white" id={card.id}>About</h1>
              <p className="mb-8 text-secondary leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default CardDetails
  
  