import React, { useState } from 'react';

import { markers } from "./markersdata";
import { UserData } from "./worlddata";

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup,
} from "react-simple-maps";

import { Tooltip } from 'react-tooltip'

// import ProgressBar from 'react-bootstrap/ProgressBar';
import Progressbar from './ProgressBar';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function World() {

    const [content,setContent] = useState(" ");

    return (
        <div className='w-100 flex flex-col justify-items-center align-center'>
            <p id="my-anchor-element"></p>
            <Tooltip anchorId="my-anchor-element" content= {content} place="top"></Tooltip>
            {/* <ReactTooltip> {content} </ReactTooltip> */}
            <div className='w-100 border-double' >
                <ComposableMap data-tip=" ">
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                          fill: "#EEE",
                                        },
                                        hover: {
                                          fill: "#B608EE",
                                          outline: "none",
                                        },
                                    }}
                                 onMouseEnter = {() => {
                                    const NAME = geo.properties.name;
                                    const Countries = UserData.map((data) => data.country)
                                    for (var i = 0; i < Countries.length; i++)
                                     {   
                                        console.log(typeof NAME)
                                        console.log(typeof Countries[i])
                                      if (NAME == Countries[i]){
                                           setContent(NAME);
                                      }
                                      else{
                                          setContent(geo.properties.name);
                                      }
                                     }
                                 }}
                                 onMouseLeave={() => {
                                    setContent(" ");
                                 }}
                                //  style={{
                                //     hover:{
                                //         fill: "#F53",
                                //         outline: "none",
                                //     },
                                //  }} 
                                />
                            ))
                        }
                    </Geographies>
                    
            
                    {markers.map((data) => (
                        <Marker key = {data.country} coordinates={data.coordinates} >
                            <circle r={8} fill="#F53" />
                        </Marker>
                    ))}

                </ComposableMap>
            </div>
            <hr className='w-4/5 ml-5' ></hr>
            <div className='flex flex-col md:flex-row items-center justify-center font-bold md:-mt-8'>
            <span className=' ml-4 text-gray-500'>United States<span className='md:hidden sm:ml-24 ml-20'>38%</span></span>
            <Progressbar className='w-2/12 ml-24' bgcolor="#F53" progress='30'  height={10} />
            <span className='text-gray-500 self-center hidden md:flex'>38%</span>
            </div>
            <hr className='w-4/5 ml-5 md:-mt-8'></hr>
            <div className='flex flex-col md:flex-row items-center justify-center font-bold md:-mt-8'>
            <span className='md:w-2/12 ml-4 text-gray-500'>India<span className='md:hidden sm:ml-24 ml-20'>29%</span></span>
            <Progressbar className='w-2/12 ml-24 align-center' bgcolor="#F53" progress='29'  height={10} />
            <span className='text-gray-500 self-center  hidden md:flex'>29%</span>
            </div>
            <hr className='w-4/5 ml-5 md:-mt-8'></hr>
            <div className='flex flex-col md:flex-row items-center justify-center font-bold md:-mt-8'>
            <span className='md:w-2/12 ml-4 text-gray-500'>Germany<span className='md:hidden sm:ml-20 ml-12'>24%</span></span>
            <Progressbar className='w-2/12 ml-24' bgcolor="#F53" progress='24'  height={10} />
            <span className='text-gray-500 self-center  hidden md:flex'>24%</span>
            </div>
            {/* <hr className='w-4/5 ml-5'></hr>
            <ProgressBar now={29} max={40} style={{"width":"25vw"}} />
            <hr></hr>
            <ProgressBar now={24} style={{"width":"25vw"}} />
            <br></br> */}
        </div>
    )
}

export default World;
