import React, { Component } from "react";
import SearchTodo from "../containers/SearchTodo";
import Todo from "./Todo";
import PropTypes from "prop-types";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    async componentDidMount() {
        // 詳細、編集画面表示用のTodoのデータを初期化
        // (詳細画面、編集画面に遷移した際に、更新したTodoが表示されないため)
        this.props.onResetTodo();
        await this.props.initTodos();
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
                <Todo key={todo.id} {...todo} onRemove={this.handleDelete} />
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
    onClickDelete: PropTypes.func.isRequired,
    onResetTodo: PropTypes.func.isRequired
};
