import { showTodoApi } from "../network/api";
import { put, call, takeLatest } from "redux-saga/effects";

function* showProduct(action) {
    // callの引数に注意
    // 第一引数：APIの関数
    // 第二、三引数；APIの引数
    const { todo, error } = yield call(showTodoApi, action.id);

    if (todo && !error) {
        yield put({ type: "SHOW_SUCCEEDED", todo });
    } else {
        alert("エラーが発生しました。");
        yield put({ type: "API_ERROR" });
        yield put({ type: "RESET_ERROR" });
    }
}

export default [takeLatest("SHOW", showProduct)];

// redux-sagaにてalertの出し方
// https://akfm.dev/blog/2020-02-28/redux-saga.html
