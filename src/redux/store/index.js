import { configureStore, combineReducers } from "@reduxjs/toolkit";

import jobsReducers from "../reducers/actions/jobs";
import queryReducers from "../reducers/actions/query1";
import favouritesReducers from "../reducers/actions/favoriteReducers";

const rootReducers = combineReducers({
  jobs: jobsReducers,
  query: queryReducers,
  favourites: favouritesReducers,
});

const store = configureStore({
  reducer: rootReducers,
});
export default store;
