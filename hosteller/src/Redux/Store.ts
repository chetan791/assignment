import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { HostelReducer } from "./HostelReducer/Reducer";
import { thunk } from "redux-thunk";

// Combine all the reducers
const rootReducer = combineReducers({
  hostel: HostelReducer,
});

// Define the RootState type for better type inference in the app
export type RootState = ReturnType<typeof rootReducer>;

// Create the Redux store with the rootReducer and middleware (thunk)
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
