import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import TodoList from "../containers/TodoList";
import TodoAdd from "../components/TodoAdd";
import TodoDetail from "../components/TodoDetail";
import TodoEdit from "../components/TodoEdit";

export default class TodoApp extends Component {
    render() {
        return (
            <div className="wrapper">
                <ul>
                    <li>
                        <Link to="/">TOP</Link>
                    </li>
                    <li>
                        <Link to="/new">CREATE</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={TodoList}></Route>
                    <Route path="/new" component={TodoAdd}></Route>
                    <Route path="/detail" component={TodoDetail}></Route>
                    <Route path="/edit" component={TodoEdit}></Route>
                </Switch>
            </div>
        );
    }
}
