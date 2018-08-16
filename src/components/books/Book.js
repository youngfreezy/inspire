import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  render() {
    const { purchaseLink, imageUrl, title } = this.props.book;
    return (
      <div className="book-item">
        <a href={purchaseLink}>{title}</a>
        <div>
          <img src={imageUrl} />
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
