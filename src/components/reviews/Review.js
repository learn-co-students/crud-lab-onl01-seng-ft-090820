import React, { Component } from 'react';

class Review extends Component {


  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Review;



// import React, { Component } from 'react';
// //import RestaurantsContainer from '../../containers/RestaurantsContainer';

// class Review extends Component {

// //   handleOnClick = () => {
// //   this.props.delete(this.props.review.id)
// // }

//   render() {

//     const { review } = this.props;
//     // console.log(review, "I am review")
//     return (
//       <div>
//         <li>
//           {review.text}
//         </li>
//         {/* <button onClick={() => this.handleOnClick()}> X </button> */}
//       </div>
//     );
//   }

// };

// export default Review;
