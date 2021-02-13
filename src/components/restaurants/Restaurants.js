import React, { Component } from 'react';
import Restaurant from './Restaurant';
import {connect} from 'react-redux';

class Restaurants extends Component {

  restList = () => {
   return this.props.restaurants.map((restaurant)=> <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete} />)
  }
  render() {
    return(
      <ul>
        Restaurants Component
        {this.restList()}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    
    delete: id => dispatch({type: 'DELETE_RESTAURANT', id })
  }
}
export default connect(null, mapDispatchToProps)(Restaurants);

