import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { VIDataGetReducer } from "./reducer/VIDataReducer";
import { adfDataPostReducer, AFDataGetReducer } from "./reducer/adfReducer";

const reducer = combineReducers({
    VIDataGet: VIDataGetReducer,
    adfPost: adfDataPostReducer,
    adfGet: AFDataGetReducer
});

const middleware = [thunk];

// Check if Redux DevTools extension is available, otherwise use regular compose
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const Store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middleware))
);

export default Store;
