import React, { Component } from "react";
import { withRouter } from "react-router";
import TodoEditArea from "../containers/TodoEditArea";
import PropTypes from "prop-types";

class TodoEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.todo.title,
            content: props.todo.content
        };
    }

    async componentDidMount() {
        await this.props.onShowTodo(this.props.match.params.id);
    }

    render() {
        const editArea = this.props.todo.title ? (
            <TodoEditArea {...this.props.todo} />
        ) : (
            <div></div>
        );
        return (
            <React.Fragment>
                <h1 className="title">Todo Edit</h1>
                {editArea}
            </React.Fragment>
        );
    }
}

TodoEdit.propsTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired,
    onShowTodo: PropTypes.func.isRequired
};

export default withRouter(TodoEdit);
