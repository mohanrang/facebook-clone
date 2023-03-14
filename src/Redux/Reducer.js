const initialState = {
  auth: false,
};
const Reducer = (state = initialState, action) => {
  if (action.type === "AUTH") {
    return (state = {
      auth: action.payload,
    });
  }

  return state;
};

export default Reducer;
