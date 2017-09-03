import { combineReducers } from 'redux'
import { v4 } from 'node-uuid'

const initialState = [
  { id: v4(), name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
  { id: v4(), name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
  { id: v4(), name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
]

const products = (state = initialState, { type, payload }) => {
  switch(type){
    case 'PRODUCT_ADDED':
      return [...state, payload]
    default:
      return state 
  }
}
/*
const byId = (state = {}, {type, payload} ) => {
  switch(type){
    case 'CART_ADDED':
      return {...state, [payload.id]: payload}
    default:
      return state
  }

}

const allIds = (state = [], {type, payload}) => {
  switch(type){
    case 'CART_ADDED':
      return [...state, payload.id]
    default:
      return state
  }
}
*/

export default combineReducers({
  products,
 /* byId,
  allIds*/
})

export const getProducts = ({ products }) => products