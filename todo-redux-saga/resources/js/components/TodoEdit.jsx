import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class TodoEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.todos[0].title,
            content: props.todos[0].content
        };
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.onEditTodo = this.onEditTodo.bind(this);
    }

    handleTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    onEditTodo() {
        if (this.state.title !== "" && this.state.content !== "") {
            this.props.onUpdateTodo(
                this.props.todos[0].id,
                this.state.title,
                this.state.content
            );
            window.alert("Todoを編集しました");
            // TOPページへリダイレクト
            this.props.history.push("/");
        } else {
            window.alert("未入力ではTodoを編集できません");
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="title">Todo Edit</h1>
                <section className="common-area">
                    <input
                        type="text"
                        placeholder="Edit Todo Title"
                        value={this.state.title}
                        onChange={this.handleTitle}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        value={this.state.content}
                        placeholder="Edit Todo Comment"
                        onChange={this.handleContent}
                    ></textarea>
                    <div className="edit-button-area">
                        <button
                            className="edit-button"
                            onClick={this.onEditTodo}
                        >
                            Edit
                        </button>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

TodoEdit.propsTypes = {
    todoId: PropTypes.number.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onUpdateTodo: PropTypes.func.isRequired
};

export default withRouter(TodoEdit);
