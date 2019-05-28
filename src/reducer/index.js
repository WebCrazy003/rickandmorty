const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHARACTER_LIST":
    case "GET_CHARACTER":
      return { ...state, loading: true };
    case "CHARACTER_RECEIVED":
      return { ...state, character: action.character, loading: false };
    case "CHARACTER_LIST_RECEIVED":
      return { ...state, characters: action.characters, loading: false };
    default:
      return state;
  }
};

export default reducer;
