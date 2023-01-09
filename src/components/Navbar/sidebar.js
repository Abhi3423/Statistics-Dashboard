import { React, useState } from 'react';
import { scaleDown as Menu } from 'react-burger-menu';
import { AiFillHome, AiFillClockCircle, AiFillFlag } from "react-icons/ai";
import { MdOutlineNavigateNext, MdAccountCircle, MdSync, MdPerson } from 'react-icons/md';
import { CgMenuGridR } from 'react-icons/cg';
import { TbArrowsCross, TbAntennaBars1 } from 'react-icons/tb';
import { RxDotFilled, RxCaretDown } from 'react-icons/rx';
import './sidebar.css';


export default props => {

  const [isOpenReal, setOpenReal] = useState(false);

  function Realset() { document.getElementById("Realnext").style.display = "none"; document.getElementById("Realdown").style.display = "block"; }
  function RealReset() { document.getElementById("Realnext").style.display = "block"; document.getElementById("Realdown").style.display = "none"; }

  const [isOpenConversions, setOpenConversions] = useState(false);

  function Conversionsset() { document.getElementById("Conversionsnext").style.display = "none"; document.getElementById("Conversionsdown").style.display = "block"; }
  function ConversionsReset() { document.getElementById("Conversionsnext").style.display = "block"; document.getElementById("Conversionsdown").style.display = "none"; }

  const [isOpenEcommerce, setOpenEcommerce] = useState(false);

  function Ecommerceset() { document.getElementById("Ecommercenext").style.display = "none"; document.getElementById("Ecommercedown").style.display = "block"; document.getElementById("Ecommercename").style.color = "white"; }
  function EcommerceReset() { document.getElementById("Ecommercenext").style.display = "block"; document.getElementById("Ecommercedown").style.display = "none"; document.getElementById("Ecommercename").style.color = "#6B7280"; }

  return (
    <Menu isOpen={true}>
      <div className='flex flex-col outline-none' style={{ "background-color": "#202B3F" }}>
        <div className='grid grid-cols-2 text-gray-500 justify-items-stretch'>
          <MdPerson className=" justify-self-start" size={24}></MdPerson>
          <TbAntennaBars1 className='justify-self-end cursor-pointer' size={30}></TbAntennaBars1>
        </div>

        <div class="circle ml-12 mt-12">
          <div class="quarter one"></div>
          <div class="quarter two"></div>
          <div class="quarter three"></div>
          <div class="quarter four"></div>
          <div className='cut'></div>
          <div class="profile">
            <MdPerson className='ml-3' size={80}></MdPerson>
          </div>
        </div>

        <div className='text-white ml-16 mt-5'>Hello Jack</div>

        <div className='text-gray-400 mt-4 text-xs ml-12 font-semibold'>jackyoung@gmail.com</div>

        <div className='grid grid-cols-4 gap-2 mt-12 justify-center'>
          <AiFillHome className='' style={{ "color": "#2CCC3D" }}></AiFillHome>
          <span className='text-sm font-semibold text-white whitespace-nowrap -ml-4'>My Projects</span>
          <div className='rounded-full w-4 h-4 ml-16 self-center text-xs text-center' style={{ "background-color": "#25344E" }}>9</div>
          <MdOutlineNavigateNext className='text-gray-500 ml-8 cursor-pointer' size={24}></MdOutlineNavigateNext>
        </div>

        <div className='grid grid-cols-4 gap-2 mt-12'>
          <CgMenuGridR className='' style={{ "color": "#D66540" }}></CgMenuGridR>
          <span className='text-sm font-semibold text-white whitespace-nowrap -ml-4' style={{ "color": "#D66540" }}>Customization</span>
          <div className='bg-orange-500 rounded-full w-4 h-4 ml-16 self-center text-xs text-center'>2</div>
          <MdOutlineNavigateNext className='text-gray-500 ml-8 cursor-pointer' size={24}></MdOutlineNavigateNext>
        </div>

        <div className='grid grid-cols-4 gap-2 mt-12'>
          <AiFillClockCircle className='' style={{ "color": "#A469FB" }}></AiFillClockCircle>
          <span className='text-sm font-semibold text-white whitespace-nowrap -ml-4'>Real Time</span>
          <div className='rounded-full w-4 h-4 ml-16 self-center text-xs text-center' style={{ "background-color": "#25344E" }}>9</div>
          <MdOutlineNavigateNext id="Realnext" className='text-gray-500 ml-8 cursor-pointer' size={24} onClick={() => { Realset(); setOpenReal(true); }}></MdOutlineNavigateNext>
          <RxCaretDown id="Realdown" className='text-gray-500 ml-8 cursor-pointer' onClick={() => { RealReset(); setOpenReal(false); }} size={24} style={{ "display": "none" }}></RxCaretDown>
        </div>

        {isOpenReal && (
          <div>
            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-gray-500'></RxDotFilled>
              <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Overview</span>
              <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
            </div>

            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-gray-500'></RxDotFilled>
              <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Locations</span>
              <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
            </div>

            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-white'></RxDotFilled>
              <span className='text-sm font-semibold text-white whitespace-nowrap -ml-8'>Traffic Sources</span>
              <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
            </div>

            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-gray-500'></RxDotFilled>
              <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Content</span>
              <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
            </div>

            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-gray-500'></RxDotFilled>
              <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Events</span>
              <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
            </div>

            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-gray-500'></RxDotFilled>
              <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Conversions</span>
              <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24} ></MdOutlineNavigateNext>
            </div>
          </div>
        )}

        <div className='grid grid-cols-3 gap-2 mt-12'>
          <MdAccountCircle className='' style={{ "color": "#ECCD5E" }}></MdAccountCircle>
          <span className='text-sm font-semibold text-white whitespace-nowrap -ml-8'>Audience</span>
          <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
        </div>

        <div className='grid grid-cols-3 gap-2 mt-12'>
          <TbArrowsCross className='' style={{ "color": "#50D7C4" }}></TbArrowsCross>
          <span className='text-sm font-semibold text-white whitespace-nowrap -ml-8'>Acquisition</span>
          <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
        </div>

        <div className='grid grid-cols-3 gap-2 mt-12'>
          <MdSync className='' style={{ "color": "#4FA6D1" }}></MdSync>
          <span className='text-sm font-semibold text-white whitespace-nowrap -ml-8'>Behaviour</span>
          <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
        </div>

        <div className='grid grid-cols-3 gap-2 mt-12'>
          <AiFillFlag className='' style={{ "color": "#EE2C7A" }}></AiFillFlag>
          <span className='text-sm font-semibold text-white whitespace-nowrap -ml-8' >Conversions</span>
          <MdOutlineNavigateNext id="Conversionsnext" className='text-gray-500 ml-12 cursor-pointer' size={24} onClick={() => { Conversionsset(); setOpenConversions(true); }} ></MdOutlineNavigateNext>
          <RxCaretDown id="Conversionsdown" className='text-gray-500 ml-12 cursor-pointer' onClick={() => { ConversionsReset(); setOpenConversions(false); }} size={24} style={{ "display": "none" }}></RxCaretDown>
        </div>

        {isOpenConversions && (
          <div>
            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-gray-500'></RxDotFilled>
              <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Goals</span>
              <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
            </div>

            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-gray-500'></RxDotFilled>
              <span id="Ecommercename" className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Ecommerce</span>
              <MdOutlineNavigateNext id="Ecommercenext" className='text-gray-500 ml-12 cursor-pointer' size={24} onClick={() => { Ecommerceset(); setOpenEcommerce(true); }} ></MdOutlineNavigateNext>
              <RxCaretDown id="Ecommercedown" className='text-gray-500 ml-12 cursor-pointer' onClick={() => { EcommerceReset(); setOpenEcommerce(false); }} size={24} style={{ "display": "none" }}></RxCaretDown>
            </div>

            {isOpenEcommerce && (
              <div className='ml-8'>
                <div className='grid grid-cols-3 gap-2 mt-12'>
                  <RxDotFilled className='text-gray-500'></RxDotFilled>
                  <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Overview</span>
                  <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
                </div>

                <div className='grid grid-cols-3 gap-2 mt-12'>
                  <RxDotFilled className='text-gray-500'></RxDotFilled>
                  <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Sales Performance</span>
                  <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
                </div>

                <div className='grid grid-cols-3 gap-2 mt-12'>
                  <RxDotFilled className='text-gray-500'></RxDotFilled>
                  <span className='text-sm font-semibold text-gray-500 whitespace-nowrap -ml-8'>Transaction</span>
                  <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
                </div>

              </div>
            )}

            <div className='grid grid-cols-3 gap-2 mt-12'>
              <RxDotFilled className='text-white'></RxDotFilled>
              <span className='text-sm font-semibold text-white whitespace-nowrap -ml-8'>Multi-Channel Funnels</span>
              <MdOutlineNavigateNext className='text-gray-500 ml-12 cursor-pointer' size={24}></MdOutlineNavigateNext>
            </div>

          </div>
        )}

        <br></br>

      </div>
    </Menu>
  );
};