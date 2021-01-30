import React from 'react';

const Review = (props) => {

  return (
    <div>
      <li>
        {props.review.text}
        <button onClick={() => props.deleteReview(props.review.id)}>X</button>
      </li>
    </div>
  )

}

export default Review;
