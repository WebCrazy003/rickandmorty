const getCharacterList = () => ({
  type: "GET_CHARACTER_LIST"
});

const characterListReceived = characters => ({
  type: "CHARACTER_LIST_RECEIVED",
  characters
});

const getCharacter = id => ({
  type: "GET_CHARACTER",
  id
});

const characterReceived = character => ({
  type: "CHARACTER_RECEIVED",
  character
});

export {
  getCharacterList,
  characterListReceived,
  getCharacter,
  characterReceived
};
