import React from 'react'
import { MyLocation } from "../../App";
import { useContext } from "react";


const CardDetails = () => {
    const { card } = useContext(MyLocation);

    console.log(card.id);

    console.log(card.imagePath);
    return (
      <section className=" bg-neutral-800 text-gray-600 body-font">
        <div className="container mx-auto ">
          <div className='flex px-5 pt-16 md:flex-row flex-col items-center'>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white" id={card.id}>{card.title}</h1>
              <p className="mb-8 text-secondary leading-relaxed">{card.description}</p>
              <p className="mb-8 text-secondary leading-relaxed">Phone: {card.phone}</p>
              <p className="mb-8 text-secondary leading-relaxed">web: {card.website}</p>
              <img alt="gallery" className="cursor-pointer border-2 border-black rounded-lg shadow-md w-2/4 object-cover h-2/4 object-center block" src={card.imagePath} />
              
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default CardDetails
  
  