import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propType = {
        bookshelf: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    render(){
        const { name, books, onUpdateShelf } = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.length > 0 ? (
                            books.map((book) =>(
                            <li key={book.id}>
                                <Book book={book} onUpdateShelf={onUpdateShelf} />
                            </li>
                            ))
                        ) : (
                            <h4>No books on the shelf</h4>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf