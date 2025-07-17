import React from 'react';
import "./Header.css";

const Header = () => (
  <header>
    <h1 title="Netflix Clone">Netflix</h1>
    <nav aria-label="Main Navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Movies</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
