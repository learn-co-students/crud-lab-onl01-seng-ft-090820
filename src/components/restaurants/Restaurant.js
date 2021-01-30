import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';


const Restaurant = (props) => {

  return (
    <div>
      <li>
        {props.restaurant.text}
        <button onClick={() => props.delete(props.restaurant.id)}> X </button>
        <ReviewsContainer restaurant={props.restaurant}/>
      </li>
    </div>
  )

}

export default Restaurant;
