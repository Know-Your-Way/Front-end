import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { MyLocation } from '../../App'
import { useEffect, useState } from 'react'

const Places = () => {
    const { settingCard } = useContext(MyLocation);
    const { landmark } = useContext(MyLocation);
    const [landmarks, setLandmarks] = useState([]);
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    const baseApi = 'http://localhost:1337';

    useEffect(() => {
        console.log("landmark",landmark);
        console.log("shuffled landmark",shuffle(landmark));
        //console.log("image",landmark[0].imagePath);
        //console.log("image",landmark[0].title);
        setLandmarks(landmark);
    },[landmark]);

    const handleClick = (e) => {
        console.log(e.target.id); 
        settingCard(e.target.id, e.target.src); 
       }; 

    return (
        <section className='container mx-auto m-10  pt-10 pb-20'>
            <h2 className="text-4xl font-bold text-center text-white pb-16">We love to help you - just ask our travelers
            </h2>
            <div>
                <div className="flex h-52 pb-2 space-x-2">
                    {landmark.slice(0,2).map((data) => (
                        <div className="w-1/2">
                            <Link to='/card-details'> <img alt={data.title} className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                                id={data.id} url={baseApi + data.imagePath} title={data.imagePath} onClick={handleClick} /> </Link>
                        </div>
                    ))}
                </div>

                <div className="flex space-x-2">
                    {landmark.slice(2,6).map((data) => (
                        <div className="w-1/4">
                            <Link to='/card-details'> <img alt={data.title} className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                                id={data.id} src={data.imagePath} onClick={handleClick} /> </Link>
                        </div>
                    ))}
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