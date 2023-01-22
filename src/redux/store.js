import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = configureStore(
    { reducer: rootReducer },
    composeEnhancers(applyMiddleware(thunk))
)

export default store;