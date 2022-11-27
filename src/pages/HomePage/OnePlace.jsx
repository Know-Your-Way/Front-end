import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'




const OnePlace = () => {
    const baseApi = 'http://localhost:1337';
    const [place, setPlace] = useState({})
    const {Title, Description } = `${baseApi}${place.attributes}`
    const params = useParams()

    useEffect(()=>{
        fetch(`http://localhost:1337/api/landmarks?${params.id}`)
        .then(res => res.json())
        .then(landmark =>{
            setPlace(landmark.data)
        })
    },[])

    
    
    return (
        <div className=' container mx-auto lg:ml-80 mt-20 mb-10'>
        <Link to='/'><button className='mb-12 font-bold'>Back</button></Link>
            <div className=" max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64"  alt="Article" />
                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Most visited place</span>
                        <h5 className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link"
                        >{Title}</h5>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{Description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnePlace