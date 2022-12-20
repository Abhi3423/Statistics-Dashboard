import React from 'react'
import "./home.css";
import logout from "../Assets/logout.png";
import expand from "../Assets/expand-arrow.png";

export default function home() {
  return (
    <div>

      <div className='top-0 p-5 flex flex-row gap-8 items-center shadow-xl shadow-gray-300 border-solid border-gray-200' style={{"height":"14vh"}}>
        <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex float-left items-center p-2 text-sm text-gray-400 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <a className='text-xl text-black font-semibold lg:ml-44 md:ml-32 ml-12 w-64' href="/">Constructor</a>
        <div className='w-full flex flex-row gap-4 items-center md:mr-24'>
          <input className='border-2 border-gray-300 border-solid rounded-lg w-6/12 mt-2 indent-2' style={{"height":"7vh"}} type="text" placeholder='Try Searching<<Worst pages by load speed ' name="name" />
          <img className='ml-12 lg:ml-28 w-4 md:w-8' src={logout} alt=""/>
          <a className='text-gray-800 hover:text-white text-sm md:text-normal' href="/">web-project.io</a>
          <img className=' md:ml-8 w-4 md:w-8' src={expand} alt=""/>
        </div>
      </div>

      <div></div>
      
    </div>
  )
}
