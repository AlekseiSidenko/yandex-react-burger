import { compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    enhancers: [compose]
    // composeEnhancer(
        
        // )
})

export default store
export type IRootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch