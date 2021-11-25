import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen, toggle }) => {
    return (
        <div className= {isOpen ? 'grid grid-rows-3 text-center items-center bg-yellow-50'
        : 'hidden'
    }
    onClick={toggle}
    >
            <Link className='p-4 font-semibold uppercase' to='/'>Home</Link>
            <Link className='p-4 font-semibold uppercase' to='/learn'>Menu</Link>
            <a className='p-4 font-semibold uppercase' href='https://canvascollab.netlify.app/' target="_blank" rel="noopener noreferrer">Start</a>
        </div>
    )
}

export default Dropdown;
