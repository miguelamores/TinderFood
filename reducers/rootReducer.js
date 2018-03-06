import { combineReducers } from 'redux';

const initialState = {
    cards: [],
    likedFood: []
}


function foodReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_FOOD':
            return {
                ...state, cards: action.payload
            }
        case 'MARK_LIKED_FOOD':
            return {
                ...state, likedFood: [...state.likedFood, action.food]
            }
        case 'LIST_LIKED_FOOD':
            return {
                ...state, likedFood: action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    foodReducer
})

export default rootReducer