import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./utils/api/BooksAPI";

class ListBooks extends Component {
  state = {
    loading: true,
    booksCurrentlyReading: [],
    booksWantToRead: [],
    booksRead: []
  };

  filterBooks = (book, shelf) => {
    return book.filter(b => b.shelf === shelf);
  };

  updateShelf = (book, shelf) => {
    this.setState({ loading: true });
    BooksAPI.update(book, shelf).then(result => {
      this.componentDidMount();
    });
  };

  componentDidMount() {
    BooksAPI.getAll().then(book => {
      this.setState({
        booksCurrentlyReading: this.filterBooks(book, "currentlyReading"),
        booksWantToRead: this.filterBooks(book, "wantToRead"),
        booksRead: this.filterBooks(book, "read"),
        loading: false
      });
    });
  }

  render() {
    const bookShelfs = [
      {
        shelf: "currentlyReading",
        name: "Currently Reading",
        listBooks: this.state.booksCurrentlyReading
      },
      {
        shelf: "wantToRead",
        name: "Want to Read",
        listBooks: this.state.booksWantToRead
      },
      { shelf: "read", name: "Read", listBooks: this.state.booksRead }
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {bookShelfs.map(bookShelf => (
            <BookShelf
              key={bookShelf.shelf}
              name={bookShelf.name}
              loading={this.state.loading}
              books={bookShelf.listBooks}
              onUpdateShelf={(book, shelf) => {
                this.updateShelf(book, shelf);
              }}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default ListBooks;
