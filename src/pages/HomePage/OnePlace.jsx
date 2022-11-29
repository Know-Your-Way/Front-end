import React, { useEffect, useState } from 'react'
import {useParams , useNavigate } from 'react-router-dom'


// const baseApi = 'http://localhost:1337';

const OnePlace = () => {

    const [place, setPlace] = useState({})
    const params = useParams()
    // const [paramState, setParamState] = useState(1)
    const navigate = useNavigate()
    console.log(place)
    console.log('1', params)     

    useEffect(() => {
        console.log('inside effect', params);     
        fetch(`http://localhost:1337/api/landmarks/${params.id}?populate=*`)
            .then(res => res.json())
            .then(landmark => {
                console.log(landmark, 'landmark')
                setPlace(landmark.data)
                // setParamState(params)
            })

    }, [params])

    return (
        <div className=' container mx-auto lg:ml-80 mt-20 mb-10'>
            <button className='mb-12 font-bold' onClick={()=>{navigate("/")}}>Back</button>
            <div className=" max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" alt="Article" />
                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Most visited place</span>
                        <h5 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link"
                        >{place.attributes.Title}</h5>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">hiii</p>
                    </div>
                </div>
            </div>
        </div>
)}

export default OnePlace

// src={`${baseApi}${place.attributes.image.data.attributes.url}`}
// {place.attributes.Title}
// {place.attributesDescription}