import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Nav from "../components/Nav";
import TodoList from "../containers/TodoList";
import TodoAdd from "../containers/TodoAdd";
import TodoDetail from "../containers/TodoDetail";
import TodoEdit from "../components/TodoEdit";

export default class TodoApp extends Component {
    render() {
        return (
            <div className="wrapper">
                <Nav />
                <Switch>
                    <Route exact path="/" component={TodoList}></Route>
                    <Route path="/new" component={TodoAdd}></Route>
                    <Route
                        path="/detail/:id"
                        render={({ match }) => (
                            <TodoDetail todoId={match.params.id} />
                        )}
                    ></Route>
                    <Route path="/edit" component={TodoEdit}></Route>
                </Switch>
            </div>
        );
    }
}
