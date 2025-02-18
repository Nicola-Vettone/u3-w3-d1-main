import { configureStore, combineReducers } from "@reduxjs/toolkit";

import jobsReducers from "../reducers/jobs";
import queryReducers from "../reducers/query1";
import favouritesReducers from "../reducers/favoriteReducers";

const rootReducers = combineReducers({
  jobs: jobsReducers,
  query: queryReducers,
  favourites: favouritesReducers,
});

const store = configureStore({
  reducer: rootReducers,
});
export default store;
