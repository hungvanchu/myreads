import * as BooksAPI from "../BooksAPI";

const Book = ({ book, reLoadListBook, isSearch, myBooks }) => {
    const changeBookOnShelf = (event) => {
        const updateBooks = async () => {
            await BooksAPI.update(book, value);
            if (!isSearch) {
                reLoadListBook();
            }
        };

        const value = event.target.value
        value !== "move" && updateBooks();
    }

    const bookOnShelf = () => {
        if (!isSearch) {
            return book.shelf;
        }

        let bookShelf = myBooks && myBooks.filter((b) => b.id === book.id);
        bookShelf = bookShelf && bookShelf[bookShelf.length - 1];
        return bookShelf ? bookShelf.shelf : "none";
    }
    bookOnShelf();

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:`url("${book.imageLinks && book.imageLinks.thumbnail}")`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select onChange={changeBookOnShelf} defaultValue={bookOnShelf()}>
                        <option value="moveTo" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.hasOwnProperty("authors") ? book.authors.join(", ") : ""}</div>
        </div>
    );
};

export default Book;