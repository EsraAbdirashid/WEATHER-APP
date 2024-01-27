import React from 'react'
import './WeatherApp.css'

import search_icon from '../../assets/search.png';
// import clear_icon from '../../assets/clear.png';
// import cloud_icon from '../../assets/cloud.png';
// import drizzle_icon from '../../assets/drizzle.jpg';
// import rain_icon from '../../assets/rain.jpg';
// import snow_icon from '../../assets/snow.jpg';
// import wind_icon from '../../assets/wind.jpg';
// import humidity_icon from '../../assets/humidity.png';


const WeatherApp = () => {
  return (
    <div className='container mt-[52px] items-center text-center rounded-md m-auto bg-gradient-to-r from-indigo-900 to-indigo-600 box-border w-[400px] h-[500px] '>
    <div className='top_bar flex translate-y-4 translate-x-[20px] gap-2 text-center'>
  <input type="text"className='cityInput p-3 px-9 outline-none border-2 rounded-full font-bold' placeholder='search' />
  <div className="searchicon bg-white p-4  rounded-full ">
        <img src={search_icon} alt="" className='w-9 h-9' />
  </div>

    </div>
    <div className='weather'>
          <img src={cloud_icon} alt="" className='w-[200] h-[200px] -mt-2 m-auto' />
    </div>
    <div>
        24
    </div>
    </div>
  )
}

export default WeatherApp