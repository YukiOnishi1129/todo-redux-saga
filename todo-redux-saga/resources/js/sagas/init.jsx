import { getTodosApi } from "../network/api";
import { put, call, takeEvery } from "redux-saga/effects";

function* initProduct() {
    const { todos, error } = yield call(getTodosApi);

    if (todos) {
        yield put({ type: "INIT_SUCCEEDED", todos });
    } else {
        yield put({ API_ERROR });
    }
}

export default [takeEvery("INIT", initProduct)];
