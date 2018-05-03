import React, { Component } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "./utils/api/BooksAPI";
import "./utils/css/loader.css";

class SearchBooks extends Component {
  state = {
    query: "",
    booksInTheShelf: [],
    books: [],
    loading: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(resultBooks => {
      this.setState({
        booksInTheShelf: resultBooks
      });
    });
  }

  updateShelf = (book, shelf) => {
    this.setState({ loading: true });
    BooksAPI.update(book, shelf).then(result => {
      this.state.books.filter(
        bookState =>
          (bookState.shelf = bookState.id === book.id ? shelf : "none")
      );
      this.setState({ books: this.state.books, loading: false });
      if (shelf !== "none") {
        alert("The book " + book.title + " has been added to shelf " + shelf);
      } else {
        alert("The book " + book.title + " has been removed from the shelf");
      }
    });
  };

  updateQuery = query => {
    this.setState({ query }, () => this.queryApi(query));
  };

  setBookShelf = books => {
    books.forEach(item => {
      const myBook = this.state.booksInTheShelf.find(
        elem => elem.id === item.id
      );
      item.shelf = myBook ? myBook.shelf : "none";
    });
    return books;
  };

  queryApi = query => {
    this.setState({ loading: true });
    BooksAPI.search(query)
      .then(response => {
        const emptyResponse = !!response.error;
        const result = emptyResponse || response === undefined ? [] : response;
        const books = this.setBookShelf(result);
        this.setState({ books: books, loading: false });
      })
      .catch(error => {
        this.setState({ books: [] });
      });
  };

  render() {
    const { query, books, loading } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {loading ? (
            <div className="loader" />
          ) : (
            <ol className="books-grid">
              {books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    onUpdateShelf={(book, shelf) =>
                      this.updateShelf(book, shelf)
                    }
                  />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBooks;
