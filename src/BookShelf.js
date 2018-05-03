import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";
import "./utils/css/loader.css";

const BookShelf = props => {
  const { name, books, onUpdateShelf, loading } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        {loading ? (
          <div className="loader" />
        ) : (
          <ol className="books-grid">
            {books.length > 0 ? (
              books.map(book => (
                <li key={book.id}>
                  <Book book={book} onUpdateShelf={onUpdateShelf} />
                </li>
              ))
            ) : (
              <h4>No books on the shelf</h4>
            )}
          </ol>
        )}
      </div>
    </div>
  );
};

BookShelf.propType = {
  bookshelf: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default BookShelf;
