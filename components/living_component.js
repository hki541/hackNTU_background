import React, { Component } from 'react';
import {Link} from 'react-router';
import {request_yelp} from '../actions/yelp';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class Livings extends Component {
  constructor(props) {
    super(props);

    
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(a) {
		const lat = this.props.params.lat;
    const lng = this.props.params.lng;
    var default_parameters = {
        category_filter: a,
        ll: lat+ ","+ lng,
        radius_filter: '10000',
        sort: '2'
      };
      this.props.request_yelp(default_parameters);
  	}
  
  	render() {
      
    return (
   
      <div>
      <Link to={"YelpList/"+this.props.params.lat+"/"+this.props.params.lng} params={this.props.params}>
        
            <button type="button" onClick={() => this.handleClick('hotels')} className="btn_hotels">
               <div className="view third-effect_living">
               <div className="mask">
                Hotels
               </div>
               </div> 
            </button>
          	<button type="button" onClick={() => this.handleClick('hostels')} className="btn_hostels">
               <div className="view third-effect_living">
               <div className="mask">
                Hostels
               </div>
               </div> 
            </button>
          	<button type="button" onClick={() => this.handleClick('bedbreakfast')} className="btn_bb">
               <div className="view third-effect_living">
               <div className="mask">
                B&B
               </div>
               </div> 
            </button>
		 
        

      </Link>  
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ request_yelp }, dispatch);
}

export default connect(null, mapDispatchToProps)(Livings);
