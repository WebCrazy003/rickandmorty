import { put, takeLatest, all } from "redux-saga/effects";

function* fetchCharacters() {
  const json = yield fetch("https://rickandmortyapi.com/api/character/").then(
    response => response.json()
  );
  yield put({ type: "CHARACTER_LIST_RECEIVED", characters: json.results });
}

function* fetchCharacter(action) {
  const json = yield fetch(
    "https://rickandmortyapi.com/api/character/" + action.id
  ).then(response => response.json());
  yield put({ type: "CHARACTER_RECEIVED", character: json });
}

function* watchCharacterListReceived() {
  yield takeLatest("GET_CHARACTER_LIST", fetchCharacters);
}

function* watchCharacterReceived() {
  yield takeLatest("GET_CHARACTER", fetchCharacter);
}

export default function* rootSaga() {
  yield all([watchCharacterListReceived(), watchCharacterReceived()]);
}
