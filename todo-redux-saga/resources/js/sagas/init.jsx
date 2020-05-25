import { getTodosApi } from "../network/api";
import { put, call, takeLatest } from "redux-saga/effects";

function* initProduct() {
    const { todos, error } = yield call(getTodosApi);

    if (todos && !error) {
        yield put({ type: "INIT_SUCCEEDED", todos });
    } else {
        yield put({ type: "API_ERROR" });
        alert("エラーが発生しました。");
    }
}

export default [takeLatest("INIT", initProduct)];
