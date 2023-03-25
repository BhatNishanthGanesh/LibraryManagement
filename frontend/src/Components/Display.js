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

  return (
    <div className="display-page">
      <div className="Border">
        <h2 className="title">
          <em>Items presented are</em>
        </h2>
        {posts.length === 0 ? (
          <p>No items found</p>
        ) : (
          <div className="post-container">
            {posts.map((post) => (
              <div className="post" key={post.id}>
                <h5 className="item-name">{post.Item_Name}</h5>
                <p className="price">{post.Price}</p>
                <p className="quantity">{post.Quantity}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Display;
