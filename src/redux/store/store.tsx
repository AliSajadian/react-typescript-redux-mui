import { createStore, applyMiddleware } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { RootState, RootActions } from '../index';



export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
    )
);

// // store.js
// import { createStore, applyMiddleware, compose } from 'redux';
// import singleReducer from './redux/index';
// import thunk from 'redux-thunk';

// const store = createStore(
// 	singleReducer,
// 	compose (applyMiddleware(thunk),
// 		window.devToolsExtension? window.devToolsExtension(): f => {return f})
// );

// export default store;