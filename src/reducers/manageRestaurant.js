import cuid from 'cuid';

export default function manageRestaurants(state ={restaurants: [], reviews:[]}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
        const restaurant = {
        id: cuid(),
        text: action.text
      }
      //console.log(action)
      return { restaurants: state.restaurants.concat(restaurant) };

      case 'DELETE_RESTAURANT':

    return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
        const review = {
        id: cuid(),
        text: action.text
      }
      console.log(action)
       return { reviews: state.reviews.concat(review) };
            // const restaurant = Object.assign({}, action.restaurant, {id: cuid()})
            // return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})

        // case 'DELETE_RESTAURANT':
        //     const restaurants = state.restaurants.filter(res => res.id !== action.id)
        //     return Object.assign({}, state, {restaurants})

        // case 'ADD_REVIEW':
        //     const review = Object.assign({}, action.review, {id: cuid()})
        //     return Object.assign({}, state, {reviews: state.reviews.concat(review),})

        // case 'DELETE_REVIEW':
        //     const reviews = state.reviews.filter(rev => rev.id !== action.id)
        //     return Object.assign({}, state, {reviews})

        default:
            return state;

    }

}
