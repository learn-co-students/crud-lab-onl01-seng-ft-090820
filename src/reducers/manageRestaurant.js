import cuid from 'cuid';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

export default rootReducer 

function manageRestaurants(state = [], action) {
    switch (action.type){
        case 'ADD_RESTAURANT': 
        const restaurant= {
            id: cuid(),
            text: action.text
        }
        return [...state, restaurant] 

        case 'DELETE_RESTAURANT': 
        const filteredRestaurants = state.filter(r => r.id !== action.id)
        return filteredRestaurants

        default: 
        return state

        
    }
}

function manageReviews(state = [], action) {
    switch (action.type){
        case 'ADD_REVIEW': 
        const review= {
            id: cuid(),
            text: action.review.text,
            restaurantId: action.review.restaurantId
        }
        return  [...state, review]

        case 'DELETE_REVIEW': 
        const filteredReviews = state.filter(r => r.id !== action.id)
        return filteredReviews

        default: 
        return state
    }
}