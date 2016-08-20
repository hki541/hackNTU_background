import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import RootIndex from './components/root_index';
import WeatherIndex from './components/weather_index';
import Geosuggest from './GeoSuggest/Geosuggest';
import Yelp from './components/yelp_components';
import WeatherBackground from './components/weather_background';


export default (
	<Route path="/" component={App} >
		<IndexRoute component={RootIndex} />
		
		<Route path="weather/:lat/:lng" component={WeatherBackground} handler={Geosuggest} />
	
		<Route path="yelp" component={Yelp} />
	</Route>
);

//this.props.params.id
//parameter url