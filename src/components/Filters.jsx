import React, { useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
<<<<<<< HEAD


const Filters = ({ category, filterData }) => {

    const handlerOption = () => {
        filterData()
    }



=======


const Filters = () => {
    const [input, setInput] = useState('')
    const [option, setOption] = useState('')


    const handlerData = ()=>{
        console.log(input)
        console.log(option)
    }

>>>>>>> a553736671b5c049fe6044df5a3fd954b386d853
    return (
        <div className='container mx-auto '>
            <div className='  md:bg-white md:h-20 md:mt-3 md:rounded-md '>
                <div className=' flex flex-col pt-5 justify-evenly items-center md:pt-0 md:flex-row md:items-center md:justify-around'>
                    <div className='mt-4'>
                        <div className=' relative'>
<<<<<<< HEAD
                            <input type='text' placeholder='Enter Your Destination?' className=' w-64 lg:w-64 rounded-md' />
=======
                            <input type='text' placeholder='Enter Your Destination?' className=' w-64 lg:w-64 rounded-md' 
                                onChange={(e)=> setInput(e.target.value)}
                            />
>>>>>>> a553736671b5c049fe6044df5a3fd954b386d853
                            <GrLocation className=' absolute top-3 left-56' />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className=' relative'>
<<<<<<< HEAD
                            <select className='w-64 lg:w-64 capitalize rounded-md' onChange={(e)=>filterData(e.target.value)}>
                                {Array.isArray(category)
                                    ? category.map((cat_name, id) => {
                                        return (
                                            <option key={id}>{cat_name}</option>
                                        )
                                    }) : null}
=======
                            <select className='w-64 lg:w-64  rounded-md' onChange={(e)=> setOption(e.target.value)}>
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
>>>>>>> a553736671b5c049fe6044df5a3fd954b386d853
                            </select>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className=' relative'>
                            <Link to='/map'> <button class="px-6 py-2 w-64 lg:w-64 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
<<<<<<< HEAD
                                onClick={()=>handlerOption}>Search</button></Link>
=======
                            onClick={(handlerData)}
                            >
                                Search
                            </button></Link>
>>>>>>> a553736671b5c049fe6044df5a3fd954b386d853
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
