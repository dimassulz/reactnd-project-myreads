import React, { Component } from "react";
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

import "./utils/css/App.css";

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={SearchBooks} />
      </div>
    );
  }
}

export default BooksApp;
