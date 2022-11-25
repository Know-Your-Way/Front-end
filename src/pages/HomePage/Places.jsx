import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { MyLocation } from '../../App'

const Places = () => {
    const { settingCard } = useContext(MyLocation)

    const handleClick = (e) => {
        console.log(e.target.id); 
        settingCard(e.target.id); 
       }; 

    return (
        <section className='container mx-auto m-10  pt-10 pb-20'>
            <h2 className="text-4xl font-bold text-center text-white pb-16">We love to help you - just ask our travelers
            </h2>
            <div className="">
                <div className="flex h-52 pb-2 space-x-2">
                    <div className="w-1/2 ">
                    <Link to='/card-details'><img alt="gallery" className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                     id="2" src="../Asset/cards/atomium.jpeg" onClick={handleClick}/></Link>
                    </div>
                    <div className=" w-1/2">
                    <Link to='/card-details'> <img alt="gallery" className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                         id="3" src="../Asset/cards/grand_place.jpeg" onClick={handleClick} /> </Link>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <div className=" w-1/4 ">
                    <Link to='/card-details'> <img alt="gallery" className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                         id="5" src="../Asset/cards/king_palace.jpeg" onClick={handleClick}/> </Link>
                    </div>
                    <div className="w-1/4">
                    <Link to='/card-details'> <img alt="gallery" className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                         id="4" src="../Asset/cards/maneken.jpeg" onClick={handleClick} /> </Link>
                    </div>
                    <div className="w-1/4 ">
                    <Link to='/card-details'><img alt="gallery" className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                         id="6" src="../Asset/cards/palace-des-justice.jpeg" onClick={handleClick}/> </Link>
                    </div>
                    <div className=" w-1/4">
                    <Link to='/card-details'><img alt="gallery" className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                         id="1" src="../Asset/cards/park.jpeg" onClick={handleClick}/> </Link>
                    </div>
                </div>
                <div className='w-full p-2 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
                    <p className="px-5 text-center tracking-widest text-lg">
                        <q>
                        Take only memories, leave only footprints
                        </q>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Places