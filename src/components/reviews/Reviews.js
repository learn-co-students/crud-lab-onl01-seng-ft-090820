import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);
    
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;




// import React, { Component } from 'react';

// import Review from './Review';

// class Reviews extends Component {
 

//   render() {
//     console.log(this.props, 'I am propps ')
//     // const {reviews, restaurantId, deleteReview } = this.props;

//     // const reviewList = reviews.filter(review => review.restaurantId === restaurantId)
//     // const revlistOne = reviewList.map((review, i) => {
//     //   return <Review key={i} review={review} deleteReview={deleteReview} />
//     //})

//     return (
//       <div>
//           <ul>
        
//          </ul>
//       </div>
      
//     );
//   }
// };

// export default Reviews;


