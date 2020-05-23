import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="title">Todo Detail</h1>
                <section className="common-area">
                    <div className="detail-titele-area">
                        <h2 className="detail-title">■ Title</h2>
                        <div className="detail-title-name">
                            <span>{this.props.todos[0].title}</span>
                        </div>
                    </div>
                    <div className="detail-content-area">
                        <h2 className="detail-content">■ Content</h2>
                        <div className="detail-content-name">
                            <p>{this.props.todos[0].content}</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

TodoDetail.propsTypes = {
    todoId: PropTypes.number.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};
