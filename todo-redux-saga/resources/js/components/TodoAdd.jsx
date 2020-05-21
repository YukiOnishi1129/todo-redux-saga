import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoAdd extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="title">Todo Add</h1>
                <input type="text" placeholder="New Todo Title" />
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </React.Fragment>
        );
    }
}

TodoAdd.propsTypes = {};
