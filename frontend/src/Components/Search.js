import React, { useState } from "react";
import Axios from "axios";

function Search() {
  const [libraryResults, setLibraryResults] = useState([]);
  const [ebookResults, setEbookResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    Axios.get(`http://localhost:3100/BOOK?Book_Name=%${searchTerm}%`).then((response) => {
      const libraryResults = response.data;
      Axios.get(`http://localhost:3200/eBOOK?Book_Name=%${searchTerm}%`).then((response) => {
        const ebookResults = response.data;
        const matchingResults = libraryResults.filter((libraryBook) => {
          return ebookResults.some((ebookBook) => ebookBook.Book_Name === libraryBook.Book_Name);
        });
        setLibraryResults(matchingResults);
        setEbookResults(matchingResults);
      });
    });
  }  
  

  const displayLibraryResults = () => {
    return libraryResults.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.Book_Name}</td>
          <td>{item.Author}</td>
          <td>{item.Quantity}</td>
        </tr>
      );
    });
  };

  const displayEbookResults = () => {
    return ebookResults.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.Book_Name}</td>
          <td>{item.Author}</td>
          <td><button onClick={() => window.open(item.Link)}>ebook</button></td>
        </tr>
      );
    });
  };

  return (
    <div className="search-page">
      <center>
        <div className="Border">
          <h2 className="title">
            <em>Search for Books</em>
          </h2>
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter Book Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
          {libraryResults.length === 0 && ebookResults.length === 0 ? (
            <p>No Books found</p>
          ) : (
            <div>
              {libraryResults.length !== 0 && (
                <div>
                  <h3>Books in Library</h3>
                  <table className="search-table">
                    <thead>
                      <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>{displayLibraryResults()}</tbody>
                  </table>
                </div>
              )}
              {ebookResults.length !== 0 && (
                <div>
                  <h3>eBooks</h3>
                  <table className="search-table">
                    <thead>
                      <tr>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody>{displayEbookResults()}</tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

export default Search;
