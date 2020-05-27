import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoDetailArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="common-area">
                    <div className="detail-titele-area">
                        <h2 className="detail-title">■ Title</h2>
                        <div className="detail-title-name">
                            <span>{this.props.title}</span>
                        </div>
                    </div>
                    <div className="detail-content-area">
                        <h2 className="detail-content">■ Content</h2>
                        <div className="detail-content-name">
                            <p>{this.props.content}</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

TodoDetailArea.propsTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
