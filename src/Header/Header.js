import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="netflix-header" role="banner">
        <div className="nav-left">
          <h1 className="logo">NETFLIX</h1>
          <nav className="nav-links" role="navigation">
            <a href="#home">Home</a>
            <a href="#tvshows">TV Shows</a>
            <a href="#movies">Movies</a>
            <a href="#new">New & Popular</a>
            <a href="#mylist">My List</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
