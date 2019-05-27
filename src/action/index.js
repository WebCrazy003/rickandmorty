const getCharacters = () => ({
  type: "GET_CHARACTERS"
});

const charactersReceived = characters => ({
  type: "CHARACTERS_RECEIVED",
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

export { getCharacters, charactersReceived, getCharacter, characterReceived };
