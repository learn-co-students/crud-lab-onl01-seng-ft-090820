import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const {restaurants} = this.props
    const restList = restaurants.map( restaurant => <Restaurant deleteRestaurant={this.props.deleteRestaurant} restaurant={restaurant} />)
    return(
      
      <ul>
        Restaurants Component
        {restList}
      </ul>
    );
  }
};

export default Restaurants;