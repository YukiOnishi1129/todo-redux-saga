import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import createStore from "./store";
import TodoApp from "./components/TodoApp";

// historyインスタンスの生成
const history = createBrowserHistory();

// storeの生成
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <TodoApp />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
);
