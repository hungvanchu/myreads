import { Link } from "react-router-dom";
import { useState } from "react";
import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const Search = ({myBooks, reLoadListBook}) => {
  const isSearch = true;
  const [books, setBooks] = useState([]);
  const [doingSearch, setDoingSearch] = useState(false);

  const searchQuery = (query) => {
    query = query.trim();
    const getSearchBooks = async () => {
      if (!doingSearch) {
        setDoingSearch(true);
        const res = await BooksAPI.search(query);
        setBooks(!res.error ? res : []);
        setDoingSearch(false);
      }
    };
    query.length !== 0 ? getSearchBooks() : setBooks([]);
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/" onClick={reLoadListBook}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => searchQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books && books.map((book) => (
            <Book key={book.id} book={book} reLoadListBook={reLoadListBook} isSearch={isSearch} myBooks={myBooks}/>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;