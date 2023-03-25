import React from "react";
import Axios from "axios";
import "../Css/Display.css";

function Display() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    Axios.get("http://localhost:3100/IMS").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const displayData = () => {
    return posts.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.Item_Name}</td>
          <td>{item.Price}</td>
          <td>{item.Quantity}</td>
          <td>{item.Date}</td>
          <td>{item.Sold}</td>
        </tr>
      );
    });
  };
  

  return (
    <div className="display-page">
      <center>
      <div className="Border">
        <h2 className="title">
          <em>Items presented are</em>
        </h2>
        {posts.length === 0 ? (
          <p>No items found</p>
        ) : (
          <table className="update-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>To do by</th>
              <th>Items Sold</th>
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

export default Display;
