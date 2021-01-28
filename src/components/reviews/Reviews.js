import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const relevant_Reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)

    const renderReviews = relevant_Reviews.map(review => {
      return <Review key={review.id} review={review} deleteReview={this.props.deleteReview}/>
    })

    return (
      <ul>
        {renderReviews}
      </ul>
    );
  }
};

export default Reviews;