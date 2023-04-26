import { useEffect, useState } from "react";
import Search from "./Search";
import { Route, Routes, useNavigate } from "react-router-dom";
import BookShelfComponent from "./BookShelfComponent";
import * as BooksAPI from "../BooksAPI";

const ChangeBooks = () => {
  const [books, setBooks] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getAllBooks();
  }, []);

  const reLoadListBook = () => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      navigate("/");
    };

    getAllBooks();
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={
          <Search myBooks={books} reLoadListBook={reLoadListBook} />
        } />
        <Route exact path="/" element={
          <BookShelfComponent books={books} reLoadListBook={reLoadListBook} />
        } />
      </Routes>
    </div>
  );
};

export default ChangeBooks;