const loadingSpinner = (state = false, action) => {
  let new_state = state;

  switch (action.type) {

    case 'SET_LOADING_SPINNER_STATUS':
      new_state = action.payload;
      break;

    default:
      new_state = state;
  }
  return new_state;
};

export default loadingSpinner;