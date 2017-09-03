import { v4 } from 'node-uuid'



export const addCart = (item) => ({
  type: 'CART_ADDED',
    payload: {
      name: item.name,
      price: item.price,
      id: item.id 
    }
})

export const removedCart = (id) => ({
  type: 'CART_REMOVED',
  payload: {
    id
  }
})

export const addProduct = (product) => ({
  type: 'PRODUCT_ADDED',
    payload: {
      ...product,
      id: v4()
    }
})

