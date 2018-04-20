import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './utils/api/BooksAPI'

class ListBooks extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((book) => {
      this.setState({books:book})
    })
  }

  render(){
      const bookShelfs = ['Currently Reading', 'Want to Read', 'Read']
      return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {bookShelfs.map((bookShelf, key) => (
              <BookShelf key={key} bookshelf={bookShelf} books={this.state.books} />
            ))}
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      )
  }
}
export default ListBooks