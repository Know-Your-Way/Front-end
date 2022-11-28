import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
const baseApi = 'http://localhost:1337';


const Filters = ({ category, filterData, places, setPlaces, location, input, setCurrentCategory, setInput, currentCategory }) => {

    console.log(places, '9')
    console.log(location, 'location')


    const onChangeInput = (event) => {
        event.preventDefault()
        setInput(event.target.value)
        console.log(places, 14)
    }

    const onChangeCategory = (event) => {
        event.preventDefault()
        setCurrentCategory(event.target.value)

    }

    const onSearch = (searchInput, searchCategory) => {
        setInput(searchInput)
        setCurrentCategory(searchCategory)
        filterData(currentCategory)
    }


    return (
        <div className='container mx-auto '>
            <div className='  md:bg-white md:h-20 md:mt-3 md:rounded-md '>
                <div className=' flex flex-col pt-5 justify-evenly items-center md:pt-0 md:flex-row md:items-center md:justify-around'>
                    <div className='mt-4'>
                        <div className=' relative'>
                            <input type='text' value={input} placeholder='Enter Your Destination?' className=' w-64 lg:w-64 rounded-md'
                                onChange={onChangeInput} />
                            <GrLocation className=' absolute top-3 left-56' />
                            {
                                places.filter((item) => {
                                    const searchInput = input.toLowerCase()
                                    const address = item.attributes.sub_urban.toLowerCase()
                                    return searchInput && address.startsWith(searchInput) && address !== searchInput;
                                })
                                    .map((item) => {
                                        return (
                                            <option className=' bg-white  top-10' onClick={() => onSearch(item.attributes.sub_urban)}>{item.attributes.sub_urban}</option>
                                        )
                                    })
                            }
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='relative'>
                            <select className='w-64 lg:w-64 capitalize rounded-md' onChange={onChangeCategory}>
                                <option value={currentCategory}>{currentCategory} </option>
                                {Array.isArray(category)
                                    ? category.map((cat_name, id) => {
                                        return (
                                            <option key={id}>{cat_name}</option>
                                        )
                                    }) : null}
                            </select>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className=' relative'>
                            <Link to='/map'> <button class="px-6 py-2 w-64 lg:w-64 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                onClick={() => onSearch(input, category)}>Search</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
