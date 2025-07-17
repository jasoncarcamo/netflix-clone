import React, { Component } from "react";
import Header from "./Header/Header";
import Row from "./Row/Row";
import Modal from "./Modal/Modal";
import { movieSections } from "./data";
import Banner from "./Banner/Banner";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
    };
  }

  handleMovieClick = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  closeModal = () => {
    this.setState({ selectedMovie: null });
  };

  render() {
    return (
      <>
        <Header />

        <Banner movie={movieSections[0].movies[0]} />
        <main role="main">
          {movieSections.map((section, idx) => (
            <Row
              key={idx}
              title={section.title}
              movies={section.movies}
              onMovieClick={this.handleMovieClick}
            />
          ))}
        </main>
        <footer className="footer" role="contentinfo">
          <p>© 2025 Reactflix. All rights reserved.</p>
        </footer>
        <Modal movie={this.state.selectedMovie} onClose={this.closeModal} />
      </>
    );
  }
}

export default App;
