import { React, useState} from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { AiFillSave, AiOutlineDownload } from 'react-icons/ai';
import { BsFillShareFill } from 'react-icons/bs';

import logout from "../Assets/logout.png";
import expand from "../Assets/expand-arrow.png";


function Navbar() {

    const [value, setValue] = useState('Day');

    const handleChange = (event) => {

        setValue(event.target.value);

    };


    return (
        <div>
            <div className='top-0 p-5 flex flex-row gap-8 items-center shadow-xl shadow-gray-300 border-solid border-gray-200' style={{ "height": "14vh" }}>
                {/* <button onClick={() => setShowNav(true)}  data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex float-left items-center p-2 text-sm text-gray-400 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button> */}
                <a className='text-xl text-black font-semibold lg:ml-44 md:ml-32 ml-12 w-64' href="/">Constructor</a>
                <div className='w-full flex flex-row gap-4 items-center md:mr-40'>
                    <input className='border-2 border-gray-300 border-solid rounded-lg xl:w-96 lg:w-80 md:w-32 sm:w-28 w-8 mt-2 indent-2' style={{ "height": "7vh", "font-family": "Arial, FontAwesome" }} type="text" placeholder='&#xF002; Search' name="name" />
                    <img className='ml-8 xl:ml-40 lg:ml-20 md:ml-16 sm:w-4 w-8 md:w-8 sm:mt-0 mt-2' src={logout} alt="" />
                    <a className='xl:ml-32 lg:ml-24 md:ml-16 ml-8 text-gray-800 text-sm md:text-normal' href="/">web-project.io</a>
                    <img className=' xl:ml-32 lg:ml-20 md:ml-16 sm:ml-4 ml-2 w-4 md:w-8' src={expand} alt="" />
                </div>
            </div>

            <div className=' mt-12 grid grid-cols-4 gap-28 md:gap-36 items-center'>
                <a className='xl:text-xl lg:text-lg text-gray-500 font-semibold lg:ml-40 md:ml-32 ml-12 w-64' href="/">Analytics Home</a>
                <div className='hidden 2xl:w-96 lg:w-80 w-52 sm:grid lg:grid-cols-5 md:grid-cols-2 lg:gap-4 gap-y-2 xl:-ml-8 lg:ml-8 md:ml-8 lg:h-12 h-24 items-center text-center shadow-xl shadow-gray-100 border-solid border-gray-200 border-2 rounded-full'>
                    <div className='text-gray-400'><a className=' lg:py-3 lg:pr-3 lg:pl-9 -ml-1 rounded-l-full lg:hover:bg-gray-200 hover:text-orange-600 hover:font-bold hover:text-lg hover:underline hover:underline-offset-8 hover:decoration-orange-300' href="/">Day</a></div>
                    <div className='text-gray-400 '><a className=' lg:p-3 lg:pr-5 lg:hover:bg-gray-200 hover:text-orange-600 hover:font-bold hover:text-lg hover:underline hover:underline-offset-8 hover:decoration-orange-300' href="/">Week</a></div>
                    <div className='text-gray-400 lg:col-span-1 col-span-2'><a className=' lg:p-3 lg:hover:bg-gray-200 hover:text-orange-600 hover:font-bold hover:text-lg hover:underline hover:underline-offset-8 hover:decoration-orange-300' href="/">Month</a></div>
                    <div className='text-gray-400'><a className=' lg:p-3 lg:pr-1 lg:hover:bg-gray-200 hover:text-orange-600 hover:font-bold hover:text-lg hover:underline hover:underline-offset-8 hover:decoration-orange-300' href="/">Quarter</a></div>
                    <div className='text-gray-400'><a className=' lg:p-3 2xl:pr-4 xl:pr-3 lg:pr-2 rounded-r-full lg:hover:bg-gray-200 hover:text-orange-600 hover:font-bold hover:text-lg hover:underline hover:underline-offset-8 hover:decoration-orange-300' href="/">Year</a></div>
                </div>

                <div className='sm:hidden'>

                    <select className='sm:hidden w-32 h-8 ml-4 shadow-xl shadow-gray-100 border-solid border-gray-200 border-2 rounded-full' value={value} onChange={handleChange} >

                        <option value="Day">Day</option>

                        <option value="Week">Week</option>

                        <option value="Month">Month</option>

                        <option value="Quarter">Quarter</option>

                        <option value="Year">Year</option>

                    </select>

                </div>

                <div className='2xl:w-96 xl:w-80 lg:w-60 md:w-44 lg:ml-16 md:ml-8 sm:ml-16 ml-4 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-3 md:grid-rows-1 sm:grid-rows-3 grid-rows-1 md:gap-0 sm:gap-y-8 sm:gap-x-8 gap-12 h-12 items-center text-gray-400'>
                    <div className=' block md:hidden lg:block xl:-ml-1 2xl:-ml-0'><AiFillSave size={24}></AiFillSave></div>
                    <div className='hover:text-orange-600 hover:font-bold xl:-ml-8 lg:-ml-4 sm:block hidden hover:text-lg hover:underline hover:underline-offset-8 hover:decoration-orange-300'><a href="/">Save</a></div>
                    <div className=' block md:hidden lg:block xl:-ml-1 2xl:-ml-0'><AiOutlineDownload size={24}></AiOutlineDownload></div>
                    <div className='hover:text-orange-600 hover:font-bold xl:-ml-8 lg:-ml-4  sm:block hidden hover:text-lg hover:underline hover:underline-offset-8 hover:decoration-orange-300'><a href="/">Export</a></div>
                    <div className=' block md:hidden lg:block xl:-ml-1 2xl:-ml-0'><BsFillShareFill size={20}></BsFillShareFill></div>
                    <div className='hover:text-orange-600 hover:font-bold xl:-ml-8 lg:-ml-4 sm:block hidden hover:text-lg hover:underline hover:underline-offset-8 hover:decoration-orange-300'><a href="/">Share</a></div>
                </div>

                <div className=''>
                    <button className='bg-orange-400 grid grid-cols-2 hover:bg-orange-600 text-white w-8 h-8 lg:w-28 md:w-24 md:h-auto p-2 rounded-full xl:ml-12 lg:ml-8 md:-ml-4'>
                        <IoIosAddCircle className='text-orange-200 lg:ml-0 align-center lg:-mt-1 md:mt-1 -mt-1 md:ml-1 -ml-1' size={24}></IoIosAddCircle>
                        <span className='lg:whitespace-nowrap -ml-4 font-semibold text-xs md:block hidden'>Add Widget</span></button>
                </div>

            </div>

        </div>
    )
}

export default Navbar