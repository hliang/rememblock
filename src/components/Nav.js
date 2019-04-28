import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li className="brandname">
                        <a href="/RememBlock">RememBlock</a>
                    </li>
                    <li className="nav-item">
                        <div>{this.props.message}</div>
                    </li>
                    <li className="nav-item">
                        <div>Score: {this.props.currScore} | Top Score: {this.props.topScore}</div>
                        <span id="toglehint" className="hint" onClick={this.props.toggleHint}>Hint: {this.props.showHint ? "ON" : "OFF"}</span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;