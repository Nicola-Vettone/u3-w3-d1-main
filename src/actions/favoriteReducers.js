const initialState = {
  favourites: [],
};
const favouritesReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return { ...state, favourites: [...state.favourites, action.payload] };

    default:
      return state;
  }
};
export default favouritesReducers;
