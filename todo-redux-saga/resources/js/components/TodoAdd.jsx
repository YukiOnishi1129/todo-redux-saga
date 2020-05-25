import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        console.log(props);
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

    async onAddTodo() {
        console.log(this.props.history);
        if (this.state.title !== "" && this.state.content !== "") {
            await this.props.onCreateTodo(
                this.state.title,
                this.state.content,
                this.props.history
            );
            this.setState({
                title: "",
                content: ""
            });
        } else {
            window.alert("未入力ではTodoを作成できません");
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="title">Todo Add</h1>
                <section className="common-area">
                    <input
                        type="text"
                        placeholder="New Todo Title"
                        value={this.state.title}
                        onChange={this.handleTitle}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        value={this.state.content}
                        placeholder="New Todo Comment"
                        onChange={this.handleContent}
                    ></textarea>
                    <div className="add-button-area">
                        <button className="add-button" onClick={this.onAddTodo}>
                            Add
                        </button>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

TodoAdd.propsTypes = {
    isApiError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onCreateTodo: PropTypes.func.isRequired,
    onResetErrorFlg: PropTypes.func.isRequired
};

export default withRouter(TodoAdd);
