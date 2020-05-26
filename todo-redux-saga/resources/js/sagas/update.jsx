import { updateTodoApi } from "../network/api";
import { put, call, takeLatest } from "redux-saga/effects";

function* updateProduct(action) {
    // callの引数に注意
    // 第一引数：APIの関数
    // 第二、三引数；APIの引数
    const { updateFlg, error } = yield call(
        updateTodoApi,
        action.id,
        action.title,
        action.content
    );

    if (updateFlg && !error) {
        yield put({ type: "UPDATE_SUCCEEDED", updateFlg });
        alert("Todoを編集しました");
    } else {
        alert("エラーが発生しました。");
        yield put({ type: "API_ERROR" });
        yield put({ type: "RESET_ERROR" });
    }
    // TOPページへリダイレクト
    action.history.push("/");
}

export default [takeLatest("UPDATE", updateProduct)];

// redux-sagaにてalertの出し方
// https://akfm.dev/blog/2020-02-28/redux-saga.html
