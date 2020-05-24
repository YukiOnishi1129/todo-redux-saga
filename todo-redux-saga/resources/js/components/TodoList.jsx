import React, { Component } from "react";
import SearchTodo from "../containers/SearchTodo";
import Todo from "./Todo";
import { getTodosApi } from "../network/api";
import PropTypes from "prop-types";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    async componentDidMount() {
        await this.props.initTodos();
    }

    // Todo更新
    handleUpdate(targetId, title) {
        this.props.onClickUpdate(targetId, title);
    }

    // Todo削除
    handleDelete(targetId) {
        this.props.onClickDelete(targetId);
    }

    render() {
        // propsからstate, イベントを取得できる
        // const { todos } = this.props;

        const todoList = this.props.todos.map(todo => {
            return (
                <Todo
                    key={todo.id}
                    {...todo}
                    onChangeTodo={this.handleUpdate}
                    onRemove={this.handleDelete}
                />
            );
        });
        return (
            <React.Fragment>
                <h1 className="title">Todo List</h1>
                <SearchTodo />
                <section className="common-area">
                    <ul className="todolist">{todoList}</ul>
                </section>
            </React.Fragment>
        );
    }
}

// Propsの型チェック
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    initTodos: PropTypes.func.isRequired,
    onClickUpdate: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};
