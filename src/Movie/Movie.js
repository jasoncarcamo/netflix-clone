import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <section className="hero" role="banner">
        <img src="/images/hero-banner.jpg" alt="Featured Show Banner" className="hero-bg"/>
        <div className="hero-content">
          <h2 className="hero-title">Featured Title</h2>
          <p className="hero-desc">An immersive description of the featured show that's long enough to look real.</p>
          <div className="hero-btns">
            <button className="btn play">Play</button>
            <button className="btn info">More Info</button>
          </div>
        </div>
        <div className="hero-fadeBottom"></div>
      </section>
    );
  }
}

export default Movie;
