import {React} from 'react';
import "./home.css";
import LineChart from "../Line/line";
import BarChart from "../Bar/bar";
import WorldChart from '../World/world';
import MultiBarChart from '../MultiBar/multibar';
import Sidebar from '../Navbar/sidebar';
import {IoIosAddCircle} from 'react-icons/io';

import logout from "../Assets/logout.png";
import expand from "../Assets/expand-arrow.png";
import save from '../Assets/save.png';
import download from '../Assets/export.png';
import share from '../Assets/share.png';
import menu from '../Assets/menu.png';

export default function Home() {

  return (
    <div id="outer-container">
      
      <Sidebar class="inline-flex float-left items-center p-2 text-sm text-gray-400 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      <div className='top-0 p-5 flex flex-row gap-8 items-center shadow-xl shadow-gray-300 border-solid border-gray-200' style={{ "height": "14vh" }}>
        {/* <button onClick={() => setShowNav(true)}  data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex float-left items-center p-2 text-sm text-gray-400 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button> */}
        <a className='text-xl text-black font-semibold lg:ml-44 md:ml-32 ml-12 w-64' href="/">Constructor</a>
        <div className='w-full flex flex-row gap-4 items-center md:mr-40'>
          <input className='border-2 border-gray-300 border-solid rounded-lg xl:w-96 lg:w-80 md:w-32 sm:w-28 w-8 mt-2 indent-2' style={{ "height": "7vh" , "font-family":"Arial, FontAwesome"}} type="text" placeholder='&#xF002; Try Searching<<Worst pages by load speed ' name="name" />
          <img className='ml-8 xl:ml-40 lg:ml-20 md:ml-16 w-4 md:w-8' src={logout} alt="" />
          <a className='xl:ml-32 lg:ml-24 md:ml-16 ml-8 text-gray-800 text-sm md:text-normal' href="/">web-project.io</a>
          <img className=' xl:ml-32 lg:ml-20 md:ml-16 ml-4 w-4 md:w-8' src={expand} alt="" />
        </div>
      </div>

      <div className=' mt-12 grid grid-cols-4 gap-2 md:gap-8 items-center'>
        <a className='xl:text-xl lg:text-lg text-gray-500 font-semibold lg:ml-40 md:ml-32 ml-12 w-64' href="/">Analytics Home</a>
        <div className='2xl:w-96 xl:w-80 lg:w-60 grid grid-cols-5 -ml-8 h-12 items-center shadow-xl shadow-gray-100 border-solid border-gray-200 border-2 rounded-full'>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Day</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Week</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Month</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Quarter</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Year</a></div>
        </div>

        <div className='2xl:w-96 xl:w-80 lg:w-60 grid grid-cols-6 h-12 gap-1 items-center shadow-xl shadow-gray-100 border-solid border-gray-200 border-2 rounded-full'>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 align-center'><img src={save} alt='' /></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Save</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><img classname='h-4' src={download} alt='' /></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Export</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><img src={share} alt='' /></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Share</a></div>
        </div>
        
        <div className=''>
          <button className='bg-orange-400 grid grid-cols-2 hover:bg-orange-600 text-white w-2/5 p-2 rounded-full ml-16'>
            <IoIosAddCircle className='text-orange-200 mt-1 ml-3'></IoIosAddCircle>
            <span className='whitespace-nowrap -ml-8 font-semibold'>Add Widget</span></button>
        </div>

      </div>

      <div className='grid md:grid-cols-1 md:grid-rows-4 lg:grid-cols-2 lg:grid-rows-1 ml-12 gap-20 mt-12'>

        <div className='w-11/12 shadow-xl shadow-gray-300 border-solid border-gray-200 rounded-lg'>
          <div className='grid grid-cols-2 md:grid-cols-4 mt-8 mb-8 2xl:gap-20 xl:gap-12 lg:gap-4 md:gap-20 gap-8 lg:ml-0 ml-28'>
            <div className='flex flex-col'>
              <span className='text-gray-500 font-semibold xl:text-2xl lg:text-xl'>453</span>
              <span className='text-gray-400'>Users</span>
              <span className='text-green-500'>&#x2191; 39.3%</span>
            </div>

            <div className='flex flex-col xl:-ml-8'>
              <span className='text-gray-500 font-semibold xl:text-2xl lg:text-xl'>545</span>
              <span className='text-gray-400'>Sessions</span>
              <span className='text-green-500'>&#x2191; 40.6%</span>
            </div>

            <div className='flex flex-col xl:-ml-8'>
              <span className='text-gray-500 font-semibold xl:text-2xl lg:text-xl'>56.93%</span>
              <span className='text-gray-400 '>Bounce Rate</span>
              <span className='text-red-600'>&#x2191; 3.8% </span>
            </div>

            <div className='flex flex-col'>
              <span className='text-gray-500 font-semibold xl:text-2xl lg:text-xl'>2 min</span>
              <span className='text-gray-400'>Duration</span>
              <span className='text-red-600'>&#x2191; 0.5%</span>
            </div>

          </div>
          <LineChart/>
        </div>

        <div className='w-11/12 shadow-xl shadow-gray-300 border-solid border-gray-200 rounded-lg'>
          <MultiBarChart></MultiBarChart>
        </div>

        <div className='w-11/12 shadow-xl shadow-gray-300 border-solid border-gray-200 rounded-lg'>
            <div className='ml-4 mt-8 items-center'>
              <span className='text-gray-400 font-bold text-xs sm:text-base'>Current Active Users</span>
              <img className="float-right w-8 sm:mr-4" src={menu} alt=" " />
            </div>
            <div className='mt-4 mb-4'>
              <span className='sm:text-5xl text-gray-500 font-semibold ml-4'>21</span>
            </div>
            <BarChart></BarChart>
            {/* <div className='w-full grid grid-rows-4 gap-8 mt-4 align-items-start'>
                <div className='font-semibold text-gray-400 flex flex-row gap-44'>
                  <span className='ml-12'>Main Active Pages</span>
                  <span>Link</span>
                  <span>Users</span>
                </div>

                <div className='font-bold text-gray-700 flex flex-row gap-44'>
                  <span className='ml-12'>Main Page</span>
                  <span>/Index</span>
                  <span>12</span>
                </div>

                <div className='font-bold text-gray-700 flex flex-row gap-44'>
                  <span className='ml-12'>About Page</span>
                  <span>/About</span>
                  <span>8</span>
                </div>

                <div className='font-bold text-gray-700 flex flex-row gap-44'>
                  <span className='ml-12'>Service Page</span>
                  <span>/Services</span>
                  <span>1</span>
                </div>

            </div> */}
            <div className='w-full grid grid-rows-7 grid-cols-3 gap-y-4 gap-x-12 justify-items-center'>
              <div className='mt-4 ml-12 text-gray-500 font-semibold'>Main Active Pages</div> <div className='mt-4 text-gray-500 font-semibold'>Link</div> <div className='mt-4 text-gray-500 font-semibold'>Users</div>
              <hr className='w-4/5 col-span-3'></hr>
              <div className='text-gray-600 font-bold'>Main Page</div> <div className='text-gray-600 font-bold'>/Index</div>  <div className='text-gray-600 font-bold'>12</div>
              <hr className='w-4/5 col-span-3'></hr>
              <div className='text-gray-600 font-bold'>About Page</div> <div className='text-gray-600 font-bold'>/About</div>  <div className='text-gray-600 font-bold'>8</div>
              <hr className='w-4/5 col-span-3'></hr>
              <div className='text-gray-600 font-bold'>Service Page</div> <div className='text-gray-600 font-bold'>/Services</div> <div className='text-gray-600 font-bold'>1</div>
            </div>
            <br></br>
        </div>

        <div className='w-11/12 shadow-xl shadow-gray-300 border-solid border-gray-200 rounded-lg'>
          <div className='ml-4 mt-8 items-center'>
            <span className='text-gray-400 font-bold text-xs sm:text-base'>Sessions by Country</span>
            <img className="float-right w-8 sm:mr-4" src={menu} alt=" " />
          </div>
          <WorldChart />
        </div>

      </div>

      <br></br>
      </div>
    </div>
  )
}
