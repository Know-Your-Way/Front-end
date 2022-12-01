import React from 'react'

const Cards = () => {
    return (
        <section className='bg-gray-300 pb-10 h-auto w-screen'>
            <div className=' container mx-auto'>
                <h2 className="text-4xl font-bold text-center text-gray-700 pt-16">We love to help you - just ask our travelers
                </h2>
                <div className=' grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className=" group w-full h-72 max-w-sm p-2 mt-16 bg-white rounded-lg shadow-lg  dark:bg-gray-800  hover:bg-sky-700">
                        <div className="flex justify-center -mt-10 ">
                            <img className="object-cover w-24 h-24 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="../Asset/cards/person1.jpeg" />
                        </div>
                        <p className="mt-7 text-gray-600 text-center dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-center mt-4">
                            <h6 href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300 group-hover:text-white"  role="link">Dan</h6>
                        </div>
                    </div>
                    <div className="group w-full h-72 max-w-sm p-2 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:bg-sky-700">
                        <div className="flex justify-center -mt-10 ">
                            <img className="object-cover w-24 h-24 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="../Asset/cards/person2.png" />
                        </div>
                        <p className="mt-7 text-gray-600 text-center dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-center mt-4">
                            <h6 href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300 group-hover:text-white" role="link">Antony</h6>
                        </div>
                    </div>
                    <div className="group w-full h-72 max-w-sm p-2 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:bg-sky-700">
                        <div className="flex justify-center -mt-10 ">
                            <img className="object-cover w-24 h-24 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="../Asset/cards/person3.jpeg" />
                        </div>
                        <p className="mt-7 text-gray-600 text-center dark:text-gray-200 group-hover:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                        <div className="flex justify-center mt-4">
                            <h6 href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300 group-hover:text-white" role="link">Juliya</h6>
                        </div>
                    </div>
                </div>
                <div className='w-full p-2 mt-16 bg-white text-blue-800 rounded-lg shadow-lg dark:bg-gray-800'>
                    <p className="px-5 text-center tracking-widest text-lg">
                        <q>
                            Remember that happiness if a way of travel, not a destination
                        </q>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Cards