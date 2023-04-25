import React, { useState, useEffect } from "react";
import Axios from "axios";

function Search1() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3100/BOOK").then((response) => {
      setPosts(response.data);
      setCount(response.data.length);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter((item) =>
    item.Book_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayData = () => {
    return filteredPosts.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.Book_Name}</td>
          <td>{item.Author}</td>
          <td>{item.Quantity}</td>
        </tr>
      );
    });
  };

  return (
    <div className="display-page">
      <center>
        <div className="Border">
          <h2 className="title">
            <em>Books presented in Library are</em>
          </h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by book name"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <p>Total Books: {count}</p>
          {filteredPosts.length === 0 ? (
            <p>No Books found</p>
          ) : (
            <table className="update-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>{displayData()}</tbody>
            </table>
          )}
        </div>
      </center>
    </div>
  );
}

function Search2() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3200/eBOOK").then((response) => {
      setPosts(response.data);
      setCount(response.data.length);
    });
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter((item) =>
    item.Book_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayData = () => {
    return filteredPosts.map((item) => {
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
    <div className="display-page">
      <center>
        <div className="Border">
          <h2 className="title">
            <em>eBooks presented are</em>
          </h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by book name"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <p>Total Books: {count}</p>
          {filteredPosts.length === 0 ? (
            <p>No Books found</p>
          ) : (
            <table className="update-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>{displayData()}</tbody>
            </table>
          )}
        </div>
      </center>
    </div>
  );
}

function Search() {
    const [showSearch, setshowSearch] = useState(true);
    const [showSearch1, setshowSearch1] = useState(false);
    const toggleSearch = () => {
      setshowSearch(true);
      setshowSearch1(false);
    };
    const toggleSearch1 = () => {
      setshowSearch1(true);
      setshowSearch(false);
    };
  
    return (
      <div>
        <button onClick={toggleSearch} style={{borderRadius:"20%"}}>For Library</button>
        <button onClick={toggleSearch1} style={{borderRadius:"20%"}}>For Ebook</button>
        {showSearch && <Search1/>}
        {showSearch1 && <Search2 />}
      </div>
    );
  }
  
  export default Search;