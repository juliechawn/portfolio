import React from 'react';
import './Weather.css';

import CityEntries from './components/CityEntries';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';

export default class Weather extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='col'>
          <CityEntries />
        </div>
        <div className='row'>
          <div className='col-7'>
            <CityInfo />
          </div>
          <div className='col-5'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
