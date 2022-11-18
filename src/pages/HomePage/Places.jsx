import React from 'react'

const Places = () => {
    return (
        <section className='container mx-auto m-10  pt-10 pb-20'>
            <h2 className="text-4xl font-bold text-center text-white pb-16">We love to help you - just ask our travelers
            </h2>
            <div class="">
                <div class="flex h-52 pb-2 space-x-2">
                    <div class="w-1/2 ">
                        <img alt="gallery" class=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block" src="../Asset/cards/atomium.jpeg" />
                    </div>
                    <div class=" w-1/2">
                        <img alt="gallery" class=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block" src="../Asset/cards/grand_place.jpeg" />
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class=" w-1/4 ">
                        <img alt="gallery" class=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block" src="../Asset/cards/king_palace.jpeg" />
                    </div>
                    <div class="w-1/4">
                        <img alt="gallery" class=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block" src="../Asset/cards/maneken.jpeg" />
                    </div>
                    <div class="w-1/4 ">
                        <img alt="gallery" class=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block" src="../Asset/cards/palace-des-justice.jpeg" />
                    </div>
                    <div class=" w-1/4">
                        <img alt="gallery" class=" cursor-pointer hover:scale-125 border-2 border-black rounded-lg shadow-md w-full object-cover h-full object-center block" src="../Asset/cards/park.jpeg" />
                    </div>
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