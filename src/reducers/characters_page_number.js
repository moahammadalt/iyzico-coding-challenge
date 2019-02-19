const charactersPageNumber = (state = 1, action) => {
  let new_state = state;

  switch (action.type) {

    case 'SET_CHARACTERS_PAGE_NUMBER':
      new_state = action.payload;
      break;

    default:
      new_state = state;
  }
  return new_state;
};

export default charactersPageNumber;