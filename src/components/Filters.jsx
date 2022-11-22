import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'


const Filters = () => {
    return (
        <div className='container mx-auto '>
            <div className='  md:bg-white md:h-20 md:mt-3 md:rounded-md '>
                <div className=' flex flex-col pt-5 justify-evenly items-center md:pt-0 md:flex-row md:items-center md:justify-around'>
                    <div className='mt-4'>
                        <div className=' relative'>
                            <input type='text' placeholder='Enter Your Destination?' className=' w-64 lg:w-64 rounded-md' />
                            <GrLocation className=' absolute top-3 left-56' />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className=' relative'>
                            <select className='w-64 lg:w-64  rounded-md'>
                                <option className='bg-white'>Select Category</option>
                                <option>Hospital</option>
                                <option>Pharmacy</option>
                                <option>Restaurant</option>
                                <option>Hotel</option>
                                <option>Playground</option>
                                <option>Toilet</option>
                                <option>Parking</option>
                                <option>Taxi station</option>
                                <option>Bars</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className=' relative'>
                            <Link to='/map'> <button class="px-6 py-2 w-64 lg:w-64 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Search
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
