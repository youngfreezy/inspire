import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
class BooksList extends Component {
  constructor(props) {
    super(props);
    this.sortByCriteria = this.sortByCriteria.bind(this);
    this.state = {
      books: this.props.authorInfo.books
    };
  }

  // in the real world, the data passed in would be an array of objects, with multiple authors, so I wrote the code designed to handle that in the future

  sortByCriteria(sortKey) {
    const books = this.state.books.sort((a, b) => {
      return a[sortKey].localeCompare(b[sortKey]);
    });
    this.setState({ books });
  }
  render() {
    const { author, birthday, birthPlace } = this.props.authorInfo;
    return (
      <div className="authors-list">
        <div className="info-row">
          <div>Author: {author}</div>
          <div>Birthday: {birthday}</div>
          <div>BirthPlace: {birthPlace}</div>
        </div>
        <button
          onClick={() => {
            this.sortByCriteria("title");
          }}
        >
          Sort A-Z
        </button>
        <button
          onClick={() => {
            this.sortByCriteria("PublishDate");
          }}
        >
          Sort By Published Date
        </button>
        <div className="books-list">
          {this.state.books.map((book, i) => {
            return <Book book={book} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

BooksList.propTypes = {
  authorInfo: PropTypes.object.isRequired
};

export default BooksList;
