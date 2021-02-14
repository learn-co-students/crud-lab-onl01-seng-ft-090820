import React, { Component } from 'react';
import Restaurant from './Restaurant';


class Restaurants extends Component {

  restList = () => {
   return this.props.restaurants.map((restaurant)=> <Restaurant key={restaurant.id} restaurant={restaurant} delete={this.props.delete} />)
  }
  render() {
    //console.log(this.props.restaurants)
    return(
      <ul>
        Restaurants Component
        {this.restList()}
      </ul>
    );
  }
};

export default Restaurants;

// const mapDispatchToProps = dispatch => {
//   return {
    
//     //delete: id => dispatch({type: 'DELETE_RESTAURANT', id })
//   }
// }

//connect(null, mapDispatchToProps)(Restaurants);

