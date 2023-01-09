import { React} from 'react';
import "./home.css";
import LineChart from "../Line/line";
import BarChart from "../Bar/bar";
import WorldChart from '../World/world';
import MultiBarChart from '../MultiBar/multibar';
import Sidebar from '../Navbar/sidebar';
import Navbar from '../Navbar/navbar';
import menu from '../Assets/menu.png';


export default function Home() {

  return (
    <div id="outer-container">

      <Sidebar class="inline-flex float-left items-center p-2 text-sm text-gray-400 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        
        <Navbar></Navbar>

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
            <LineChart />
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
