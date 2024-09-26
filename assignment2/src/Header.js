import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="left">
          <h2>{this.props.name}</h2>
          <h3 class="light-text">{this.props.title}</h3>
        </div>
        <div className="right">
          <p>
            Email: <a href={`mailto:${this.props.email}`}>{this.props.email}</a>
          </p>
          <p>Web: {this.props.web}</p>
          <p>Mobile:{this.props.mobile}</p>
        </div>
      </header>
    );
  }
}

export default Header;
