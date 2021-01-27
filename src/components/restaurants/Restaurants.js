import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const { restaurants, deleteRestaurant } = this.props 

    return(
      <ul>
        {restaurants.map((r, i) => <Restaurant key={i} restaurant={r} deleteRestaurant={deleteRestaurant} /> )}
      </ul>
    );
  }
};

export default Restaurants;