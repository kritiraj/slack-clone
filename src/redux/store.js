import { createStore, combineReducers, compose } from "redux";
import roomReducer from './reducers/room';

const reducer = combineReducers({
    roomReducer:roomReducer
  });

const store = createStore(
    reducer,
    compose(
      typeof window === "object" && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );
  
  export default store;