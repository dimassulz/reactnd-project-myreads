import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component {
    static propType = {
        bookshelf: PropTypes.array.isRequired,
        books: PropTypes.array.isRequired
    }
    render(){
        const { bookshelf, books } = this.props
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) =>(
                        <li key={book.id}>
                            <Book book={book} />
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf