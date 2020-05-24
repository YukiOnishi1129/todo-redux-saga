import { all } from "redux-saga/effects";
import Init from "../sagas/init";

export default function* rootSaga() {
    yield all([...Init]);
}
