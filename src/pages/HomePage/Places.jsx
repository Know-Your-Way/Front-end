import React from 'react';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyLocation } from '../../App'
// https://strapi-production-41f0.up.railway.app/api/landmarks?populate=*

const Places = () => {
    
    const { landmark } = useContext(MyLocation)


    return (

        <section className='container mx-auto m-10  pt-10 pb-20'>
            <h2 className="text-4xl font-bold text-center text-gray-500 pb-16">Most Visited Places</h2>
            <div className=' grid gap-10 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    landmark.map((img, id) => {
                        return (
                            <Link to={/places/ + `${img.id}`}>
                                <div className="flex flex-wrap flex-col items-center justify-center w-full max-w-sm mx-auto">
                                    <div className="w-full h-64 bg-gray-200 bg-center bg-cover rounded-lg shadow-md">
                                        <img alt='landmark' className='w-full object-cover rounded-lg h-full object-center block hover:scale-105' key={`${img}${id}`} src={`${img.attributes.image.data.attributes.url}`} />
                                    </div>
                                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white hover:bg-blue-500 hover:text-white">{img.attributes.Title}</h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }    
            </div>
            <div className='w-full p-2 mt-16 text-blue-800 bg-gray-300 rounded-lg shadow-lg dark:bg-gray-800'>
                    <p className="px-5 text-center tracking-widest text-lg">
                        <q>
                            Take only memories, leave only footprints
                        </q>
                    </p>
                </div>
        </section>
    )
}

export default Places