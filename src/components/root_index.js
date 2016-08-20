import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

class Root extends Component {
	componentWillMount(){
		console.log('good time'); 
	}


  render() {
    return (
      <div>
        <div className="weather_background" >
          <div className= "searchBar_wrapper" >
          <SearchBar />
        </div>
        <div className= "weatherList_wrapper" >
        <WeatherList />
        </div>
        </div>
      </div>
    );
  }
}

export default Root; 