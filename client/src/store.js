import {createStore,applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    compose (applyMiddleware(...middleware),
//     window._REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
//  the original code above that is recommended by the instructions of redux seem to be only working with chrome extensions
//  as i am developing this on a firefox browser i am using this instead otherwise you get a type error of b.apply not being a function etc

window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ,));

export default store;