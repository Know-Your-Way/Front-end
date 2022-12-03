import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='container mx-auto m-2 md:flex items-center bg-white justify-between py-2 md:px-10 '>
            <div className='cursor-pointer'>
                <Link to='/'><h6 className='leading-none font-medium text-md'>Know</h6></Link>
                <Link to='/'><h1 className=' text-lg font-bold text-primary leading-none'>Your Way</h1></Link>
            </div>
            <div onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <GiHamburgerMenu className='md:hidden' />
            </div>
            <div className={`flex flex-col md:flex-row z-10 md:z-10 absolute md:static bg-white z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19 ' : 'top-[-490px]'}`}>
                <Link className=' md:ml-8  md:my-0 my-7  ' to='/'>Home</Link>
                <Link className=' md:ml-8  md:my-0 my-7 ' to='/about'>About</Link>
                <Link className=' md:ml-8  md:my-0 my-7' to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Nav