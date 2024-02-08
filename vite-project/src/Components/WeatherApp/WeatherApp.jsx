import React from 'react';
import './WeatherApp.css';

import search_icon from '../../../public/search.png';
import clear_icon from'../../../public/clear.png'; 
import cloud_icon from '../../../public/cloud.png';
import drizzle_icon from '../../../public/drizzle.jpg';
import rain_icon from 
import snow_icon from 
import wind_icon from 
import humidity_icon from

const WeatherApp = () => {
  return (
    <div>
     <div className="container">
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='search' />
        <div className="search-icon">
        <img src={search_icon} alt="img" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default WeatherApp;