import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reducer from "../reducers";

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            reducer,
            router: connectRouter(history)
        }),
        applyMiddleware(routerMiddleware(history))
    );
}
