// import { createStore, applyMiddleware } from "redux"
// // redux-logger (nếu có)
// import thunk from "redux-thunk"
// import { loginReducer } from "./reducers/loginReducer"

// const middleware = [thunk]

// // Tạo Store, trong Store sẽ có reducers
// export const store = createStore(
//     loginReducer,
//     applyMiddleware(...middleware)
// )

import thunk, { ThunkMiddleware } from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { loginReducer } from "./reducers/loginReducer";

// Tạo Store, trong Store sẽ có reducers
export const store = createStore(loginReducer, applyMiddleware(thunk))

// import thunkMiddleware from 'redux-thunk';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // this is for debugging with React-Native-Debugger, you may leave it out
// import { loginReducer } from "./reducers/loginReducer";

// const rootReducer = combineReducers({
//   loginReducer: loginReducer,
// });

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware))
// );