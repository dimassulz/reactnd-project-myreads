import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propType = {
        book: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    
    render(){
        const { book, onUpdateShelf } = this.props
        return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail: 'https://www.marjon.ac.uk/margen/img/blankBook.png'})` }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(e) => onUpdateShelf(book, e.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title"><a href={book.previewLink} target="_blank">{book.title}</a></div>
             {book.authors !== undefined ? 
                book.authors.map((author,key) => ( <div className="book-authors" key={key}> {author} </div> )) : (
                    <div className="book-authors"> Without Author </div>
            )}
        </div>
      )
    }
}

export default Book