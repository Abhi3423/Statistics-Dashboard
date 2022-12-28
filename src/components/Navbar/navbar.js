import {React,useState} from 'react'

import cross from '../Assets/cross.png';

export default function Navbar() {

  const [showNav, setShowNav] = useState(false)

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (
    <>
      <div className='box'>
        <div className='navbar sticky top-0 p-5 flex flex-col gap-8 items-center bg-black'>
          <a className='text-white font-medium lg:ml-64 md:ml-80 ml-8' href="/">
          <img className="w-52" src="https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62e8d2ea218fb73fa66895dd_88x37.webp" alt=""/>
          </a>
          <button onClick={() => setShowNav(true)}  data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex ml-32 md:ml-0 md:float-none p-2 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          {/* <div className='hidden w-full lg:flex flex-row gap-4 xl:gap-8 items-center'>
          <a className='text-gray-400 hover:text-white ml-28' href="/">Courses</a>
          <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='w-8 -ml-4' src={down} alt=''/>
          <a className='text-gray-400 hover:text-white' href="/">Hire from Us</a>
          <a className='text-gray-400 hover:text-white' href="/">Blog</a>
          <a className='text-gray-400 hover:text-white' href="/">Coding Contest</a>
          <a className='text-gray-400 hover:text-white' href="/">About Us</a>
          <a className='text-gray-400 hover:text-white' href="/">Contact</a>
          <button className='bg-blue-600 text-white w-20 p-2 rounded-full'>Login</button>
          </div> */}
        </div>

        {showNav && <div className="w-full bg-black text-white py-10">    
        <div className='navbar sticky top-0 p-5 flex flex-row gap-8 items-center bg-black -mt-28'>
          <a className='text-white font-medium lg:ml-64 md:ml-80 ml-8' href="/">
          <img className="w-52" src="https://global-uploads.webflow.com/62e8d2ea218fb7676b6892a6/62e8d2ea218fb73fa66895dd_88x37.webp" alt=""/>
          </a>
          <button className="rounded-lg text-white ml-32 md:ml-0" onClick={() => setShowNav(false)}><img className='hover:bg-white' src={cross} alt="" /></button>
        </div>  
        <div className='w-full flex flex-col gap-4 items-center'>
          <div className='flex flex-row'>
          <a className='text-gray-400 hover:text-white' href="/">Courses <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='w-8 ml-4' src={cross} alt=''/></a>
          </div>
          <a className='text-gray-400 hover:text-white' href="/">Hire from Us</a>
          <a className='text-gray-400 hover:text-white' href="/">Blog</a>
          <a className='text-gray-400 hover:text-white' href="/">Coding Contest</a>
          <a className='text-gray-400 hover:text-white' href="/">About Us</a>
          <a className='text-gray-400 hover:text-white' href="/">Contact</a>
          <button className='bg-blue-600 text-white w-20 p-2 rounded-full'>Login</button>
          </div>
    </div>
    }

        {/* <div className="lg:hidden flex">
            <Navbar showNav={showNav} setShowNav={setShowNav}></Navbar>
        </div> */}

      </div>
    </>
  )
}
