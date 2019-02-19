const charactersList = (state = [], action) => {
  let new_state = [ ...state ];

  switch (action.type) {

    case 'SET_CHARACTERS_LIST':
      new_state = [ ...action.payload ];
      break;

    default:
      new_state = state;
  }
  return new_state;
};

export default charactersList;