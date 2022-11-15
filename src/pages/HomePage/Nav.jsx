import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className=' container mx-auto mt-5 flex justify-between'>
            <div>
                <Link><h1 className='leading-none italic'>Know</h1></Link>
                <Link><h1 className=' font-bold leading-none'>Your Way</h1></Link>
            </div>
            <ul className='flex'>
                <li><Link to='/'>Home</Link></li>
                <li className='pl-8'><Link to='/about'>About</Link></li>
                <li className='pl-8'><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav