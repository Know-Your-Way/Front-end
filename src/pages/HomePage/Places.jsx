import React from 'react';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyLocation } from '../../App'


const Places = () => {
    const baseApi = 'http://localhost:1337';
    const { landmark } = useContext(MyLocation)
    return (
        <section className='container mx-auto m-10  pt-10 pb-20'>
            <h2 className="text-4xl font-bold text-center text-white pb-16">Most Visited Places
            </h2>
            <div className="flex space-x-2">
                {
                    landmark.map((img, id) => {
                        return (
                            <div className=" w-1/4 ">
                                <Link to={/places/ + `${img.id}`}><img alt="gallery" className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                                    id="5" key={`${baseApi}${img}${id}`} src={`${baseApi}${img.attributes.image.data.attributes.url}`} />
                                </Link>
                            </div>         
                            /* <div className=" w-1/4 ">
                                <Link to={/places/ + `${img.attributes.image.data.id}`}><img alt="gallery" className=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block"
                                    id="5" key={`${baseApi}${img.attributes.image.data}${id}`} src={`${baseApi}${img.attributes.image.data.attributes.url}`} />
                                </Link>
                            </div> */
                            
                        )
                    })
                }
            </div>
            <div className='w-full p-2 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800'>
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