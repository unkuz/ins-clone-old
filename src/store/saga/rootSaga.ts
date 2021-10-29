import { all } from 'redux-saga/effects';
function* hello() {
  console.log('fshfjds');
}

export function* rootSaga() {
  yield all([]);
}
