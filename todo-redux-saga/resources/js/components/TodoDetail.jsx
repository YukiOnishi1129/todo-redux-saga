import React, { Component } from "react";
import { withRouter } from "react-router";
import TodoDetailArea from "../containers/TodoDetailArea";
import PropTypes from "prop-types";

class TodoDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    async componentDidMount() {
        await this.props.onShowTodo(this.props.match.params.id);
    }

    render() {
        const detailArea = this.props.todo.title ? (
            <TodoDetailArea {...this.props.todo} />
        ) : (
            <div></div>
        );
        return (
            <React.Fragment>
                <h1 className="title">Todo Detail</h1>
                {detailArea}
            </React.Fragment>
        );
    }
}

TodoDetail.propsTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired,
    onShowTodo: PropTypes.func.isRequired
};

export default withRouter(TodoDetail);
