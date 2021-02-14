import React, { Component } from 'react';
//import Restaurant from '../restaurants/Restaurant'
import Review from './Review';

class Reviews extends Component {
 
  
  // reviewList = () => {
  //   //this.props.reviews.filter(review => review.restaurantId == this.props.restaurant.id)
  //  return this.props.restaurant.reviews.map((review)=> <Review key={review.id} review={review} delete={this.props.delete} />)
  // }
  render() {
    
    // const {reviews, restaurantId, deleteReview } = this.props;

    // const reviewList = reviews.filter(review => review.restaurantId == restaurantId)
    // const revlistOne = reviewList.map((review, i) => {
    //   return <Review key={i} review={review} deleteReview={deleteReview} />
    // })

    return (
      <ul>
        Reviews
        {/* {this.reviewList()}  */}
        {/* {revlistOne} */}
      </ul>
    );
  }
};

export default Reviews;


