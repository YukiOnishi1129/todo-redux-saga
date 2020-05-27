import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    // Todo削除
    handleClickDelete() {
        if (window.confirm("todoを削除してもいいですか？")) {
            this.props.onRemove(this.props.id);
        }
    }

    render() {
        const toDetail = id => `/detail/${id}`;
        const toEdit = id => `/edit/${id}`;
        return (
            <li className="todo">
                <span className="todo-task">{this.props.title}</span>

                <Link to={toDetail(this.props.id)}>
                    <i className="far fa-file-alt fa-lg"></i>
                </Link>

                <Link to={toEdit(this.props.id)}>
                    <i className="far fa-edit fa-lg"></i>
                </Link>

                <i
                    className="far fa-trash-alt delete fa-lg"
                    onClick={this.handleClickDelete}
                ></i>
            </li>
        );
    }
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
};
