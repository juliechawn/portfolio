import React from 'react';

export default class CityInfo extends React.Component {

  render() {
    const { cityName, cityLat, cityLong, cityTemp, cityHumidity, cityPressure, cityHightemp, cityLowtemp, cityWindspeed, cityIcon } = this.props;
    return (
      <div className='card'>
        <div className='card-header bg-primary text-white'>City Information</div>
        <div className='card-body text-center'>
          <img src={'https://openweathermap.org/img/w/' + cityIcon + '.png'} alt="weather-icon"/>
          <h2>{cityName}</h2>
          <p><small>Lat/Long: <span>{cityLat}</span>,<span>{cityLong}</span></small></p>
          <hr />
          <div className='row'>
            <div className='col'>
              <div className='col'><small><b>Temp(F)</b></small></div>
              <div className='col text-success' >{cityTemp}F</div>
            </div>
            <div className='col'>
              <div className='col'><small><b>Pressure</b></small></div>
              <div className='col text-success'>{cityPressure}</div>
            </div>
            <div className='col'>
              <div className='col'><small><b>Humidity</b></small></div>
              <div className='col text-success'>{cityHumidity}%</div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col'>
              <div className='col'><small><b>Low Temp(F)</b></small></div>
              <div className='col text-success'>{cityLowtemp}F</div>
            </div>
            <div className='col'>
              <div className='col'><small><b>High Temp(F)</b></small></div>
              <div className='col text-success'>{cityHightemp}F</div>
            </div>
            <div className='col'>
              <div className='col'><small><b>Wind Speed</b></small></div>
              <div className='col text-success'>{cityWindspeed}mph</div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}