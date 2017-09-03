import { combineReducers } from 'redux'

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'CART_ADDED':
      return [...state, payload]
    case 'CART_REMOVED':
      return state.filter(p => p.id !== payload.id)
    default:
      return state
  }
}

export default combineReducers({
  items
})

export const getItems = ({ items }) => items