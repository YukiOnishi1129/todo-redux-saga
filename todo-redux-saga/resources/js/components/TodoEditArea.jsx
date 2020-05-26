import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class TodoEditArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content
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

    async onEditTodo() {
        if (this.state.title !== "" && this.state.content !== "") {
            await this.props.onUpdateTodo(
                this.props.match.params.id,
                this.state.title,
                this.state.content,
                this.props.history
            );
        } else {
            window.alert("未入力ではTodoを編集できません");
        }
    }

    render() {
        return (
            <React.Fragment>
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

TodoEditArea.propsTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onUpdateTodo: PropTypes.func.isRequired
};

export default withRouter(TodoEditArea);
