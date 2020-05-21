import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchTodo extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        this.props.onKeyupSeatchText(e.target.value);
    }

    render() {
        return (
            <section className="common-area">
                <input
                    type="text"
                    placeholder="Search Keyword"
                    onKeyUp={this.handleSearch}
                />
            </section>
        );
    }
}

SearchTodo.prototypes = {
    onKeyupSeatchText: PropTypes.func.isRequired
};
