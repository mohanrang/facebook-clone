const Action = (data, type, dispatch) => {
  dispatch({
    type: type,
    payload: data,
  });
};

export default Action;
