import { createTodoApi } from "../network/api";
import { put, call, takeLatest } from "redux-saga/effects";

function* createProduct(action) {
    // callの引数に注意
    // 第一引数：APIの関数
    // 第二、三引数；APIの引数
    const { createFlg, error } = yield call(
        createTodoApi,
        action.title,
        action.content
    );

    if (createFlg && !error) {
        yield put({ type: "CREATE_SUCCEEDED", createFlg });
        alert("Todoを新規作成しました");
    } else {
        alert("エラーが発生しました。");
        yield put({ type: "API_ERROR" });
        yield put({ type: "RESET_ERROR" });
    }
    // TIPページへリダイレクト
    action.history.push("/");
}

export default [takeLatest("CREATE", createProduct)];

// redux-sagaにてalertの出し方
// https://akfm.dev/blog/2020-02-28/redux-saga.html
