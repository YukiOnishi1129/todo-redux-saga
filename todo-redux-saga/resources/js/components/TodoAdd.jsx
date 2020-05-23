import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
        this.handleTitle = this.handleTitle.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
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

    onAddTodo() {
        if (this.state.title !== "" && this.state.content !== "") {
            this.props.onCreateTodo(
                this.props.uniqueId + 1,
                this.state.title,
                this.state.content
            );
            window.alert("Todoを新規作成しました");
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
    uniqueId: PropTypes.number.isRequired,
    onCreateTodo: PropTypes.func.isRequired
};
