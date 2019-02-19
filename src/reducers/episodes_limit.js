const episodesLimit = (state = 0, action) => {
  let new_state = state;

  switch (action.type) {

    case 'SET_EPISODES_LIMIT':
      new_state = action.payload;
      break;

    default:
      new_state = state;
  }
  return new_state;
};

export default episodesLimit;