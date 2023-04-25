import React, { useState } from "react";
import Axios from "axios";
import "../Css/Display.css";

function Display1() {
  const [posts, setPosts] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    Axios.get("http://localhost:3100/BOOK").then((response) => {
      setPosts(response.data);
      setCount(response.data.length);
    });
  }, []);

  const displayData = () => {
    return posts.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.Book_Name}</td>
          <td>{item.Author}</td>
          <td>{item.Quantity}</td>
          {/* <td>{item.Date}</td> */}
          {/* <td>{item.Sold}</td> */}
        </tr>
      );
    });
  };

  return (
    <div className="display-page">
      <center>
        <div className="Border">
          <h2 className="title">
            <em>Books presented are</em>
          </h2>
          <p>Total Books: {count}</p>
          {posts.length === 0 ? (
            <p>No Books found</p>
          ) : (
            <table className="update-table">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Author Name</th>
                  <th>Quantity</th>
                  {/* <th>To do by</th> */}
                  {/* <th>Items Sold</th> */}
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

function Display2() {
  const [posts, setPosts] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    Axios.get("http://localhost:3200/eBOOK").then((response) => {
      setPosts(response.data);
      setCount(response.data.length);
    });
  }, []);

  const displayData = () => {
    return posts.map((item) => {
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
            <em>Books presented are</em>
          </h2>
          <p>Total Books: {count}</p>
          {posts.length === 0 ? (
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


function Display() {
  const [showDisplay, setshowDisplay] = useState(true);
  const [showDisplay1, setshowDisplay1] = useState(false);
  const toggleDisplay = () => {
    setshowDisplay(!showDisplay);
    setshowDisplay1(!showDisplay1);
  };
  const toggleDisplay1 = () => {
    setshowDisplay1(!showDisplay1);
    setshowDisplay(!showDisplay);
  };

  return (
    <div>
      <button onClick={toggleDisplay}>For Library</button>
      <button onClick={toggleDisplay1}>For Ebook</button>
      {showDisplay && <Display1 />}
      {showDisplay1 && <Display2 />}
    </div>
  );
}

export default Display;