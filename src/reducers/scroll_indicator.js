const scrollIndicator = (state = 0, action) => {
  let new_state = state;

  switch (action.type) {

    case 'SET_SCROLL_INDICATOR':
      new_state = action.payload;
      break;

    default:
      new_state = state;
  }
  return new_state;
};

export default scrollIndicator;