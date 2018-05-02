![Logo of the project](./public/favicon.png)

# MyReads Project 
This project is a example React App for add books on categorized shelfs.

## Technical Features:
* React architecture
* Validation with prop-types

## Get Started
Install dependencies
```bash
npm install or yarn install
```
Start Project
```bash
npm start or yarn start
```
## Project Organization

```bash
├── README.md - This file.
├── .gitignore # The list of git ignored files
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. 
├── public #
│   ├── favicon.png # new favicon MyReads picture
│   └── index.html # DO NOT MODIFY
└── src #
    ├── App.js # App Component Default Core
    ├── App.test.js # Test App
    ├── Book.js # Book Component 
    ├── BookShelf.js # BookShelf Component 
    ├── icons # Helpful images for your app. Use at your discretion.
    ├── utils # Utils files
         ├── api # 
             ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. 
         ├── css # 
             ├── App.css # Styles for app.
             ├── index.css # Global styles. 
             ├── loader.css # Styles for loader. 
    ├── index.js # default injection BrowserRouter and AppComponent
    ├── ListBooks.js # ListBooks Component 
    └── SearchBooks.js # SearchBooks Component 
```

## Backend Server

The Backend Server em BooksApi.js file was provided by Udacity

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
