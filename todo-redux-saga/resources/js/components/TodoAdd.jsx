import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoAdd extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="title">Todo Add</h1>
                <section className="common-area">
                    <input type="text" placeholder="New Todo Title" />
                    <textarea
                        name="comment"
                        cols="30"
                        rows="10"
                        placeholder="New Todo Comment"
                    ></textarea>
                    <div className="add-button-area">
                        <button className="add-button">Add</button>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

TodoAdd.propsTypes = {};
