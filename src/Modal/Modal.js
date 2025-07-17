import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = (e) => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const { movie, onClose } = this.props;

    if (!movie) return null;

    return (
      <div
        className="modal-overlay"
        onClick={this.handleBackgroundClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="modal-content" tabIndex="0">
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
          <h2 id="modal-title">{movie.title}</h2>
          <img src={movie.img} alt={movie.alt} />
          <p id="modal-description">{movie.description}</p>
        </div>
      </div>
    );
  }
}

export default Modal;
