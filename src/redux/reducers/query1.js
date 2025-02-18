const initialState = {
  query: "",
};
const queryReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUERY":
      return { ...state, query: action.payload };

    default:
      return state;
  }
};
export default queryReducers;
