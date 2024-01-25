import React from 'react'
import './WeatherApp.css'

import search_icon from '../../assets/search.png';
import clear_icon from '../../assets/clear.png';
import cloud_icon from '../../assets/cloud.avif';
import drizzle_icon from '../../assets/drizzle.jpg';
import rain_icon from '../../assets/rain.jpg';
import snow_icon from '../../assets/snow.jpg';
import wind_icon from '../../assets/wind.jpg';
import humidity_icon from '../../assets/humidity.png';


const WeatherApp = () => {
  return (
    <div className='container'>
    <div className='top_bar'>
  <input type="text"className='cityInput' placeholder='search' />
  <div className="searchicon">
        <img src={search_icon} alt="" className='w-4 h-4' />
  </div>
    </div>
    </div>
  )
}

export default WeatherApp