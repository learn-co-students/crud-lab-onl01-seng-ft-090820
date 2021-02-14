import React, { Component } from 'react';
import Restaurant from '../restaurants/Restaurant'
import Review from './Review';



class Reviews extends Component {

  reviewList = () => {
   return this.props.restaurant.reviews.map((review)=> <Review key={review.id} review={review} delete={this.props.delete} />)
  }
  render() {
    return (
      <ul>
        Reviews
        {/* {this.reviewList()}  */}
      </ul>
    );
  }
};

export default Reviews;


