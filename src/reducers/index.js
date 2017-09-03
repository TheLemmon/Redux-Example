import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './product'

export default combineReducers({
  cart,
  products
})

export const getItems = state => fromCart.getItems(state.cart)
export const getProducts = state => fromProducts.getProducts(state.products) 