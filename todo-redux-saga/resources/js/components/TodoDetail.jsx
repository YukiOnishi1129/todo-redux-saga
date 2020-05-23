import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoDetail extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="title">Todo Detail</h1>
                <section className="common-area">
                    <div className="detail-titele-area">
                        <h2 className="detail-title">■ Title</h2>
                        <div className="detail-title-name">
                            <span>Test1</span>
                        </div>
                    </div>
                    <div className="detail-content-area">
                        <h2 className="detail-content">■ Content</h2>
                        <div className="detail-content-name">
                            <span>Test1</span>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

TodoDetail.propsTypes = {};
