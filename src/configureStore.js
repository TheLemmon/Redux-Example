import { createStore } from 'redux'
import reducer from './reducers'

let store = undefined

const configureStore = () => {

    if (store){
        return store
    }

    store = createStore(reducer)

    store.subscribe(() => {
        console.log(store.getState())
    })
    
    return store
}

export default configureStore