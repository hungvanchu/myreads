import { Link } from "react-router-dom";
import Book from "./Book";

const bookShelfs = [
    { shelf: "currentlyReading", shelfDisplay: "Currently Reading" },
    { shelf: "wantToRead", shelfDisplay: "Want to Read" },
    { shelf: "read", shelfDisplay: "Read" }
];

const BookShelfComponent = ({books, reLoadListBook}) => {
    const isSearch = false;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {bookShelfs.map((bookShelf) => (
                        <div key={bookShelf.shelf} className="bookshelf">
                            <h2 className="bookshelf-title">{bookShelf.shelfDisplay}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books && books.filter((book) => book.shelf === bookShelf.shelf).map((book) => (
                                        <li key={book.id}>
                                            <Book book={book} reLoadListBook={reLoadListBook} isSearch={isSearch}/>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    Add a book
                </Link>
            </div>
        </div>
    );
};

export default BookShelfComponent;