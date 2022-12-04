import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'


const Filters = ({ category, filterData, places, allPlaces, input, setCurrentCategory, setInput, currentCategory, getIcon, setIcon }) => {

    const onChangeInput = (event) => {
        event.preventDefault()
        setInput(event.target.value)
    }

    const onChangeCategory = (event) => {
        event.preventDefault()
        setCurrentCategory(event.target.value)
    }

    const onSearch = (searchInput) => {
        setInput(searchInput)
        filterData(currentCategory)
        setIcon(getIcon())
    }

    let uniquePlaces = [];
    let uniqueLocations = places.filter((element) => {
        const isDuplicate = uniquePlaces.includes(element.attributes.sub_urban.trim());
        if (!isDuplicate) {
            uniquePlaces.push(element.attributes.sub_urban.trim());
            return true;
        }
        return false;
    });
    places = uniqueLocations;

    console.log(allPlaces, '43')
    return (

        <div className='container mx-auto '>
            <div className='  md:bg-white md:h-20 md:mt-3 md:rounded-md '>
                <div className=' flex flex-col md:relative pt-5 justify-evenly items-center md:pt-0 md:flex-row md:items-center md:justify-around'>
                    <div className=' mt-5 md:absolute left-5 md:mt-20'>
                        <div className=' relative'>
                            <input type='text' value={input} placeholder='Enter Your Destination?' className=' w-64 md:w-52 lg:w-64 rounded-md'
                                onChange={onChangeInput} />
                            <GrLocation className=' absolute left-56 top-3 md:left-44 lg:left-56' />
                            <div className='bg-gray-100 px-3 py-1 text-blue-800 absolute shadow-md rounded-md top-11'>
                            {
                                uniqueLocations.filter((item) => {
                                    const searchInput = input?.toLowerCase()
                                    const address = item.attributes.sub_urban?.toLowerCase()
                                    return searchInput && address?.startsWith(searchInput) && address !== searchInput;
                                })
                                    .map((item) => {
                                        return (
                                            <div className='' onClick={() => onSearch(item.attributes.sub_urban)}>{item.attributes.sub_urban}</div>
                                        )
                                    })
                            }
                            </div>
                        </div>
                    </div>
                    <div className=' mt-10 md:absolute md:mt-20'>
                        <div className='relative'>
                            <select className='w-64 md:w-52 lg:w-64 capitalize rounded-md' onChange={onChangeCategory}>
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
                    <div className=' mt-10 md:absolute right-5 md:mt-20 '>
                        <div className=' relative'>
                            <Link to='/map'> <button className="px-6 py-2 w-64 md:w-52 lg:w-64 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                onClick={() => onSearch(input, category)}>Search</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
