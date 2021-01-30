import cuid from 'cuid';

function manageRestaurants(state={
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type){
        case 'ADD_RESTAURANT':
            const restaurant = {id: cuid(), text: action.text}
            return {
                ...state,
                restaurants: [...state.restaurants, restaurant]
            }
        case 'DELETE_RESTAURANT':
            const filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            return {
                ...state,
                restaurants: filteredRestaurants
            }
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {
                ...state,
                reviews: [...state.reviews, review]
            }
        case 'DELETE_REVIEW':
            const filteredReviews = state.reviews.filter(review => review.id !== action.id)
            return {
                ...state,
                reviews: filteredReviews
            }
        default:
            return state
    }

}

export default manageRestaurants;