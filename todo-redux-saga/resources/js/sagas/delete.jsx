import { deleteTodoApi } from "../network/api";
import { put, call, takeLatest } from "redux-saga/effects";

function* deleteProduct(action) {
    const { todos, error } = yield call(deleteTodoApi, action.id);

    if (todos && !error) {
        yield put({ type: "DELETE_SUCCEEDED", todos });
        alert("Todoを削除しました。");
    } else {
        yield put({ type: "API_ERROR" });
        alert("エラーが発生しました。");
    }
}

export default [takeLatest("DELETE", deleteProduct)];
