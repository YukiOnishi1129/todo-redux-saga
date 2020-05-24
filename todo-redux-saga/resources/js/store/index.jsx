import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "../reducers";
import rootSaga from "../sagas/";

export default function createStore(history) {
    // Saga ミドルウェアを作成する
    const sagaMiddleware = createSagaMiddleware();
    // Store にマウントする
    const store = reduxCreateStore(
        combineReducers({
            reducer,
            router: connectRouter(history)
        }),
        applyMiddleware(routerMiddleware(history), logger, sagaMiddleware)
    );
    // Saga を起動する
    sagaMiddleware.run(rootSaga);
    return store;
}
