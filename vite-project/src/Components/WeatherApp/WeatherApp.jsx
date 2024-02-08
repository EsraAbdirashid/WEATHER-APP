import React from 'react';
import './WeatherApp.css';

import search_icon from '../../../public/search.png';
import clear_icon from'../../../public/clear.png'; 
import cloud_icon from '../../../public/cloud.png';
import drizzle_icon from '../../../public/drizzle.jpg';
import rain_icon from   '../../../public/rain.jpg';
import snow_icon from  '../../../public/snow.jpg';
import wind_icon from  '../../../public/wind.jpg';
import humidity_icon from  '../../../public/humidity.png';

const WeatherApp = () => {
  return (
    <div>
     <div className="container">
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='search' />
        <div className="search-icon">
        <img src={search_icon} alt="img" className='w-9 h-9 text-center m-auto' />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div>
        <div className="weather-temp">24C</div>
        <div className='weather-location'>jigjiga</div>
        <div className="data-container">
          <div className="element">
            <img src={} alt="" className='icon' />
            <div className='data'>
              
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default WeatherApp;