import React, { Component } from "react";
import "./Row.css";

class Row extends Component {
  constructor(props) {
    super(props);
    this.rowRef = React.createRef();
    this.state = {
      hoveredIndex: null,
    };
  }

  scrollLeft = () => {
    this.rowRef.current.scrollBy({ left: -window.innerWidth / 2, behavior: "smooth" });
  };

  scrollRight = () => {
    this.rowRef.current.scrollBy({ left: window.innerWidth / 2, behavior: "smooth" });
  };

  handleMouseEnter = (index) => {
    this.setState({ hoveredIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoveredIndex: null });
  };

  render() {
    const { title, movies, onMovieClick } = this.props;
    const { hoveredIndex } = this.state;

    return (
      <section className="row" aria-label={title}>
        <h2>{title}</h2>
        <div className="row-container">
          <button
            className="scroll-button left"
            onClick={this.scrollLeft}
            aria-label={`Scroll left in ${title}`}
          >
            &#10094;
          </button>
          <div className="row-posters" ref={this.rowRef} tabIndex="0">
            {movies.map((movie, idx) => (
              <article
                key={idx}
                className="movie-card"
                tabIndex="0"
                aria-label={`Watch ${movie.title}`}
                onClick={() => onMovieClick(movie)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onMovieClick(movie);
                }}
                onMouseEnter={() => this.handleMouseEnter(idx)}
                onMouseLeave={this.handleMouseLeave}
              >
                {hoveredIndex === idx && movie.preview ? (
                  <iframe
                    allow="autoplay"
                    frameBorder="0" 
                    allowfullscreen
                    width="100%"
                    height="100%"
                    src={`${movie.preview}?controls=0&autoplay=1&mute=1`}
                    autoPlay
                    loop
                    className="movie-preview"
                    playsInline
                  ></iframe>
                ) : (
                  <img src={movie.thumbnail} alt={`${movie.title} poster`} loading="lazy" />
                )}
                <div className="movie-info-overlay">
                  <h3 className="movie-title">{movie.title}</h3>
                  <p className="movie-details">
                    <span className="movie-year">{movie.year}</span> |{" "}
                    <span className="movie-rating">{movie.rating}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <button
            className="scroll-button right"
            onClick={this.scrollRight}
            aria-label={`Scroll right in ${title}`}
          >
            &#10095;
          </button>
        </div>
      </section>
    );
  }
}

export default Row;
