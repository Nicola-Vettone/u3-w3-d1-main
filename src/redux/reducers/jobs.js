const initialState = {
  jobs: [],
};
const jobsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOBS":
      return { ...state, jobs: action.payload };

    default:
      return state;
  }
};
export default jobsReducers;
