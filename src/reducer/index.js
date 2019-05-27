const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
    case "GET_CHARACTER":
      return { ...state, loading: true };
    case "CHARACTER_RECEIVED":
      return { ...state, character: action.character, loading: false };
    case "CHARACTERS_RECEIVED":
      return { ...state, characters: action.characters, loading: false };
    default:
      return state;
  }
};

export default reducer;
