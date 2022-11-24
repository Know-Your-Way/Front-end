import Filters from '../../components/Filters'
import { useContext } from 'react'
import { MyLocation } from '../../App'

const Hero = () => {
    const { category, filterData } = useContext(MyLocation)
    return (
        <div className='bg-home bg-cover bg-center h-130 md:h-129'>
            <div className=' container mx-auto flex flex-col md:flex-row items-center px-6 space-y-0 md:space-y-0' >
                <div className='flex flex-col space-y-0 md:w-1/2'>
                    <h5 className=' leading-none max-w-md text-white text-5xl font-bold text-center pt-9 md:text-5xl md:text-left md:mt-18'>Find</h5>
                    <h1 className=' leading-none max-w-md text-white text-5xl font-bold text-center md:text-5xl md:text-left'>Your Way</h1>
                    <p className='text-center text-md md:text-2xl font-light text-secondary md:text-left pt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...</p>
                </div>
                <div className='w-1/2'>
                    <img src='/Asset/Home.svg' alt='hero_img' className='pt-10 md:pt-32' />
                </div>
            </div>
            <Filters category={category} filterData={filterData}/>
        </div>
    )
}

export default Hero
