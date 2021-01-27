import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview} = this.props
    const filteredList = reviews.filter(review => review.restaurantId === restaurantId)
    const revList = filteredList.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })
    // debugger
    return (
      <ul>
        Reviews
        {revList}
      </ul>
    );
  }
};

export default Reviews;