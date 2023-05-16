"use client"

// Favourites Reducer
// Handles state changes for favourites
// addFavourite takes movie object as payload
// removeFavourite takes movie id as payload
export default function FavouritesReducer(state, action) {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return {
                ...state,
                favourites: [action.payload, ...state.favourites]
            }
        case 'REMOVE_FAVOURITE':
            return {
                ...state,
                favourites: state.favourites.filter(favourite => favourite.id !== action.payload)
            }
        default:
            return state
    }
}