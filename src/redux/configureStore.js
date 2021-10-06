import { applyMiddleware, compose, createStore } from "redux"
import appReducer from "../reducers/index"
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import rootSaga from '../saga/index'
// const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     shouldHotReload:false
//   }) : compose;
const sagaMiddleware = createSagaMiddleware()
const configureStore = ()=>{
    let middleWares = [thunk, sagaMiddleware]
    const enhancers = [applyMiddleware(...middleWares)]
    const store = createStore(appReducer ,compose(
        ...enhancers,
        window.devToolsExtension ? window.devToolsExtension() : f => f
      ))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore