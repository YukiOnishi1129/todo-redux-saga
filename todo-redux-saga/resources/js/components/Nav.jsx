import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <ul className="common-area link-area">
                <li className="link-box">
                    <Link className="link" to="/">
                        TOP
                    </Link>
                </li>
                <li className="link-box">
                    <Link className="link" to="/new">
                        CREATE
                    </Link>
                </li>
            </ul>
        );
    }
}
