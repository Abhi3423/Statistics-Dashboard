import {React} from 'react';
import "./home.css";
import LineChart from "../Line/line";
import BarChart from "../Bar/bar";
import WorldChart from '../World/world';
import MultiBarChart from '../MultiBar/multibar';
import Sidebar from '../Navbar/sidebar';
import { UserData } from "../Bar/bardata";

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
        <div className='w-full flex flex-row gap-4 items-center md:mr-24'>
          <input className='border-2 border-gray-300 border-solid rounded-lg w-6/12 mt-2 indent-2' style={{ "height": "7vh" , "font-family":"Arial, FontAwesome"}} type="text" placeholder='&#xF002; Try Searching<<Worst pages by load speed ' name="name" />
          <img className='ml-12 lg:ml-28 w-4 md:w-8' src={logout} alt="" />
          <a className='text-gray-800 hover:text-white text-sm md:text-normal' href="/">web-project.io</a>
          <img className=' md:ml-8 w-4 md:w-8' src={expand} alt="" />
        </div>
      </div>

      <div className=' mt-12 flex flex-row gap:2 md:gap-8 items-center'>
        <a className='text-xl text-gray-500 font-semibold lg:ml-44 md:ml-32 ml-12 w-64' href="/">Analytics Home</a>
        <div className='w-96 grid grid-cols-5 ml-12 h-12 items-center shadow-xl shadow-gray-100 border-solid border-gray-200 border-2 rounded-full'>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Day</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Week</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Month</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Quarter</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Year</a></div>
        </div>

        <div className='w-96 grid grid-cols-6 ml-12 h-12 items-center shadow-xl shadow-gray-100 border-solid border-gray-200 border-2 rounded-full'>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 align-center'><img src={save} alt='' /></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Save</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><img classname='h-4' src={download} alt='' /></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Export</a></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><img src={share} alt='' /></div>
          <div className='text-gray-400 hover:text-black hover:bg-gray-200 text-center'><a href="/">Share</a></div>
        </div>

        <button className='bg-orange-400 hover:bg-orange-600 text-white  p-2 rounded-full flex flex-row justify-center'>Add Widget</button>

      </div>

      <div className='grid md:grid-cols-1 md:grid-rows-4 lg:grid-cols-2 lg:grid-rows-1 ml-12 gap-20 mt-12'>

        <div className='w-11/12 shadow-xl shadow-gray-300 border-solid border-gray-200 rounded-lg'>
          <div className='grid grid-cols-2 md:grid-cols-4 mt-8 mb-8 2xl:gap-20 xl:gap-12 lg:gap-4 md:gap-20 gap-8'>
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
            <span className='sm:text-3xl text-gray-400 font-semibold ml-4'>21</span>
          </div>
          <BarChart />
        </div>

        <div className='w-11/12 shadow-xl shadow-gray-300 border-solid border-gray-200 rounded-lg'>
          <div className='ml-4 mt-8 items-center'>
            <span className='text-gray-400 font-bold text-xs sm:text-base'>Sessions by Country</span>
            <img className="float-right w-8 sm:mr-4" src={menu} alt=" " />
          </div>
          <WorldChart />
        </div>

      </div>

      {/* <WorldChart></WorldChart> */}
      <br></br>
      </div>
    </div>
  )
}
