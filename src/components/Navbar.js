import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <nav className='flex justify-between items-center h-10 px-4 bg-white text-black relative shadow' role='navigation'>
          <Link to= '/' className='text-2xl font-bold leading-10 text-center'> 
            LOGO
          </Link>
          <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>  
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
          <div className= 'hidden md:flex items-center space-x-3'>
              <Link className='bg-transparent hover:bg-pink-500 text-black text-sm font-semibold hover:text-white px-2 py-1 border border-pink-500 hover:border-transparent rounded uppercase' to='/menu'>Learn</Link>
              <a className='bg-transparent hover:bg-blue-500 text-black text-sm font-semibold hover:text-white px-2 py-1 border border-blue-500 hover:border-transparent rounded uppercase' href='https://www.google.com/' target="_blank">Start</a>
           </div>      
        </nav>
    );
};

export default Navbar;

