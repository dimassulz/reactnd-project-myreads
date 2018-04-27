import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

//import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './utils/api/BooksAPI'
// import sortBy from 'sort-by'

class SearchBooks extends Component{

    state = {
        query: '',
        books: []
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then((result) => {
          //this.componentDidMount()
        })
      }
    
    updateQuery = (query) => {
         this.setState({query: query.trim()}, () => this.queryApi(query) );
    }

    queryApi = (query) => {
        BooksAPI.search(query).then((response) => {
            const emptyResponse = !!response.error
            const books = emptyResponse || response === undefined  ? [] : response
            this.setState({books: books})
        }).catch((error) => {
            this.setState({ books: []})
           // console.log("Ocorreu um erro ao consultar! ("+error+")")
        })
    }
    
    render(){
        const {query, books} = this.state

        return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" 
                       placeholder="Search by title or author"
                       value={query}
                       onChange={(event) => this.updateQuery(event.target.value)} 
                />

              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {console.log(books)}
                    {books.map((book) =>(
                        <li key={book.id}>
                           <Book book={book} onUpdateShelf={(book, shelf) => this.updateShelf(book,shelf)} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
        )
    }
}
export default SearchBooks