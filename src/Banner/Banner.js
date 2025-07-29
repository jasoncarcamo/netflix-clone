import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
  render() {
    const { movie } = this.props;

    return (
      <section className="banner" role="region" aria-label="Featured Movie">
        <div className="banner-overlay" />
        {movie.preview ? (
          <iframe
          className="banner-video"
          src={`${movie.preview}?autoplay=1&mute=1&controls=0&loop=1&playsinline=1`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title={movie.title}
        />
        ) : (
          <img className="banner-image" src={movie.thumbnail} alt={movie.title} />
        )}
        <div className="banner-contents">
          <h1 className="banner-title">{movie.title}</h1>
          <p className="banner-description">{movie.description}</p>
          <div className="banner-buttons">
            <button className="banner-btn play">▶ Play</button>
            <button className="banner-btn info">ℹ More Info</button>
          </div>
        </div>
        <div className="banner-fade" />
      </section>
    );
  }
}

export default Banner;
