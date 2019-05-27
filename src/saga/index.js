import { put, takeLatest, take, all } from "redux-saga/effects";

function* fetchCharacters() {
  const json = yield fetch("https://rickandmortyapi.com/api/character/").then(
    response => response.json()
  );
  yield put({ type: "CHARACTERS_RECEIVED", characters: json.results });
}

function* fetchCharacter(action) {
  const json = yield fetch(
    "https://rickandmortyapi.com/api/character/" + action.id
  ).then(response => response.json());
  yield put({ type: "CHARACTER_RECEIVED", character: json });
}

function* actionWatcher1() {
  yield takeLatest("GET_CHARACTERS", fetchCharacters);
}

function* actionWatcher2() {
  yield takeLatest("GET_CHARACTER", fetchCharacter);
}

export default function* rootSaga() {
  yield all([actionWatcher1(), actionWatcher2()]);
}
