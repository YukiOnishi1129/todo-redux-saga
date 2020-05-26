import { all } from "redux-saga/effects";
import Init from "../sagas/init";
import Create from "../sagas/create";
import Show from "../sagas/show";
import Update from "../sagas/update";

export default function* rootSaga() {
    yield all([...Init, ...Create, ...Show, ...Update]);
}

// redux-sagaの記事
// https://www.kaitoy.xyz/2018/10/07/creating-react-redux-app-from-scratch-08/
