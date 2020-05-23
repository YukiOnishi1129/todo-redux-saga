import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.title, // todoの内容は親から渡ってきたtitleを表示
            editFlg: false
        };
        this.handleClickEditForm = this.handleClickEditForm.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleClickUpdate = this.handleClickUpdate.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    // Todoを編集モードに変更
    handleClickEditForm() {
        this.setState({
            editFlg: true
        });
    }

    // Todoの表示用タイトルを更新
    handleChangeText(e) {
        this.setState({
            text: e.target.value
        });
    }

    // Todo更新
    handleClickUpdate(e) {
        if (e.keyCode === 13) {
            if (e.target.value !== "") {
                this.props.onChangeTodo(this.props.id, this.state.text);
            } else {
                window.alert("未入力では編集できません");
                this.setState({
                    text: this.props.title
                });
            }

            this.setState({
                editFlg: false
            });
        }
    }

    // Todo削除
    handleClickDelete() {
        if (window.confirm("todoを削除してもいいですか？")) {
            this.props.onRemove(this.props.id);
        }
    }

    render() {
        // const editForm = this.state.editFlg ? (
        //     <input
        //         type="text"
        //         className="editForm"
        //         value={this.state.text}
        //         onChange={this.handleChangeText}
        //         onKeyUp={this.handleClickUpdate}
        //     />
        // ) : (
        //     <span className="todo-task" onClick={this.handleClickEditForm}>
        //         {this.props.title}
        //     </span>
        // );

        const toDetail = id => `/detail/${id}`;
        const toEdit = id => `/edit/${id}`;
        return (
            <li className="todo">
                <span className="todo-task" onClick={this.handleClickEditForm}>
                    {this.props.title}
                </span>

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
    onChangeTodo: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};
