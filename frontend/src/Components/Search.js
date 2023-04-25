import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Css/Display.css";

function Search({ filter }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const [bookResponse, ebookResponse] = await Promise.all([
          Axios.get("http://localhost:3100/BOOK"),
          Axios.get("http://localhost:3200/eBOOK"),
        ]);
        const allBooks = [...bookResponse.data, ...ebookResponse.data];
        setBooks(allBooks);
      } catch (error) {
        console.error(error);
      }
    };

    getBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.Book_Name.toLowerCase().includes(filter.toLowerCase()) ||
      book.Author.toLowerCase().includes(filter.toLowerCase())
  );

  const displayData = () => {
    if (filteredBooks.length === 0) {
      return <p>No books found.</p>;
    }

    return (
      <table className="update-table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Quantity/Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book._id}>
              <td>{book.Book_Name}</td>
              <td>{book.Author}</td>
              <td>
                {book.Quantity ? (
                  <span>{book.Quantity}</span>
                ) : (
                  <button onClick={() => window.open(book.Link)}>ebook</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="display-page">
      <center>
        <div className="Border">
          <h2 className="title">
            <em>Books presented are</em>
          </h2>
          <p>Total Books: {filteredBooks.length}</p>
          {displayData()}
        </div>
      </center>
    </div>
  );
}

export default Search;
