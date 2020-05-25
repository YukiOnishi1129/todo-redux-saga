import { all } from "redux-saga/effects";
import Init from "../sagas/init";
import Create from "../sagas/create";

export default function* rootSaga() {
    yield all([...Init, ...Create]);
}

// redux-sagaの記事
// https://www.kaitoy.xyz/2018/10/07/creating-react-redux-app-from-scratch-08/
