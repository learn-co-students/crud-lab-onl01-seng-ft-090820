import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    const { reviews, restaurantId, deleteReview } = this.props

    const assocReviews = reviews.filter(review => review.restaurantId === restaurantId)

    const reviewList = assocReviews.map((review, i) => {
      return (
        <Review key={i} review={review} deleteReview={deleteReview} />
      )
    })
    return (
      <ul>
        {reviewList}
      </ul>
    );
  }
};

export default Reviews;