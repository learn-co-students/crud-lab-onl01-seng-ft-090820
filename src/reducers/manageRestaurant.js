import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [ ...state.restaurants, restaurant]
      }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}

    case 'ADD_REVIEW':

      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
      return { ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }

    default:
      return state;

  }
};



// import cuid from 'cuid';
// export const cuidFn = cuid;

// export default function manageRestaurants(state ={restaurants: [], reviews:[]}, action) {
//     switch(action.type){
//         case 'ADD_RESTAURANT':
//         const restaurant = {
//         id: cuidFn(),
//         text: action.text
//       }
//       //console.log(action)
//       return {...state, restaurants: [...state.restaurants, restaurant]}
//       // return { restaurants: state.restaurants.concat(restaurant) };

//       case 'DELETE_RESTAURANT':
//         const restaurant = state.restaurants.filter((restaurant) => restaurant.id !== action.id)
//        return {
// ...state, restaurants 
//        }

//     // return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    
//     case 'ADD_REVIEW':
//       //console.log(action)
//         const review = {
//         text: action.review.text,
//         restaurantId: action.review.restaurantId,
//         id: cuidFn() 
//       }

//       //console.log(action)
//        return { ...state, 
//           reviews: [...state.reviews, review]
//        }
      
//        case 'DELETE_REVIEW':  
//        const review = state.reviews.filter((review) => review.id !== action.id)
//        return {
//          ...state, reviews 
//        }

//     // return {reviews: state.reviws.filter(review => review.id !== action.id)}


//             // const restaurant = Object.assign({}, action.restaurant, {id: cuid()})
//             // return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})

//         // case 'DELETE_RESTAURANT':
//         //     const restaurants = state.restaurants.filter(res => res.id !== action.id)
//         //     return Object.assign({}, state, {restaurants})

//         // case 'ADD_REVIEW':
//         //     const review = Object.assign({}, action.review, {id: cuid()})
//         //     return Object.assign({}, state, {reviews: state.reviews.concat(review),})

//         // case 'DELETE_REVIEW':
//         //     const reviews = state.reviews.filter(rev => rev.id !== action.id)
//         //     return Object.assign({}, state, {reviews})

//         default:
//             return state;

//     }

// }
