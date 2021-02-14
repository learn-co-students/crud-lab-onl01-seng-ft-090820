import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

handleOnClick = () => {
  this.props.delete(this.props.restaurant.id)
}

  render() {
    const { restaurant } = this.props;
   // console.log(restaurant, "I am restaurant")
    return (
      <div>
        <li>
          {restaurant.text}
          {/* <button onClick={() => restaurant.delete(restaurant.id)}> DELETE </button> */}
          <button onClick={() => this.handleOnClick()}> DELETE </button>
         
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

// const mapDispatchToProps = ()=> {
// //delete: id => dispatch({type: 'DELETE_RESTAURANT', id })
// }

export default Restaurant;
