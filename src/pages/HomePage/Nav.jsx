import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <nav className=' container mx-auto py-5 flex justify-between'>
                <div>
                    <Link to='/'><h1 className='leading-none italic'>Know</h1></Link>
                    <Link to='/'><h1 className=' font-bold leading-none'>Your Way</h1></Link>
                </div>
                <div className='flex space-x-8'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Nav